import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IToken } from './interfaces/i-token';
import { interval, Observable } from 'rxjs';
import { ISearchArtists } from './interfaces/i-artists-search';
import { IArtist } from './interfaces/i-artist';
import { IAlbum } from './interfaces/i-album';
import { ITracks } from './interfaces/i-tracks';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  // Dependency injection: l'attributo httpClient viene inizializzato
  // con l'istanza della classe HttpClient creata all'avvio dell'applicazione
  // dopo che nel file app.config.ts si aggiunge provideHttpClient()
  private httpClient: HttpClient = inject(HttpClient);

  private client_id: string = 'fceb1e53687448bbab8abb82fec80252';
  private client_secret: string = '973654b2da524add8b97c9d5ee4bd6bb';
  private urls: string[] = [
    'https://accounts.spotify.com/api/token',
    'https://api.spotify.com/v1/search?q=',
    'https://api.spotify.com/v1/artists/',
    'https://api.spotify.com/v1/albums'
  ]

  private _token!: IToken;

  public getToken(): void {
    // Preparare l'header della richiesta
    let httpHeader = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    // Preparo il body della richiesta
    let httpParams = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.client_id)
      .set('client_secret', this.client_secret)

    this.httpClient.post<IToken>(this.urls[0], httpParams.toString(), { headers: httpHeader })
      .subscribe((token: IToken) => {
        this._token = token;
        console.log(this._token);
        interval(this._token.expires_in * 1000).subscribe(() => {
          this.httpClient.post<IToken>(this.urls[0], httpParams.toString(), { headers: httpHeader })
            .subscribe((token: IToken) => {
              this._token = token;
            })
        })
      })
  }

  searchArtist(name: string): Observable<ISearchArtists> {
    let url = `${this.urls[1]}${name}&type=artist`;
    let httpHeader = new HttpHeaders()
      .set('Authorization', this._token.token_type + ' ' + this._token.access_token);

    return this.httpClient.get<ISearchArtists>(url, { headers: httpHeader })
  }

  getArtist(id: string): Observable<IArtist> {
    let url = `${this.urls[2]}/${id}`;
    let httpHeader = new HttpHeaders()
      .set('Authorization', this._token.token_type + ' ' + this._token.access_token);

    return this.httpClient.get<IArtist>(url, { headers: httpHeader })
  }

  getAlbums(id: string): Observable<IAlbum> {
    let url = `${this.urls[2]}/${id}/albums`;
    let httpHeader = new HttpHeaders()
      .set('Authorization', this._token.token_type + ' ' + this._token.access_token);

    return this.httpClient.get<IAlbum>(url, { headers: httpHeader })
  }
  getTracks(id: string): Observable<ITracks> {
    let url = `${this.urls[3]}/${id}`;
    let httpHeader = new HttpHeaders()
      .set('Authorization', this._token.token_type + ' ' + this._token.access_token);

    return this.httpClient.get<ITracks>(url, { headers: httpHeader })
  }

}
