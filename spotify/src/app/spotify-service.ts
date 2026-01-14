import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IToken } from './interfaces/i-token';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  // Dependency injection: l'attributo httpClient viene inizializzato
  // con l'istanza della classe HttpClient creata all'avvio dell'applicazione
  // dopo che nel file app.config.ts si aggiunge provideHttpClient()
  httpClient: HttpClient = inject(HttpClient);

  private client_id: string = 'fceb1e53687448bbab8abb82fec80252';
  private client_secret: string = '973654b2da524add8b97c9d5ee4bd6bb';
  private urls: string[] = [
    'https://accounts.spotify.com/api/token'
  ]

  private _token!: IToken;
  
  public getToken(): void {
    // Preparare l'header della richiesta
    let httpHeader = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

    // Preparo il body della richiesta
    let httpParams = new HttpParams()
    .set('grant-type', 'client_credentials')
    .set('client_id', this.client_id)
    .set('client_secret', this.client_secret)

    this.httpClient.post<IToken>(this.urls[0], httpParams.toString(), {headers: httpHeader})
      .subscribe((token: IToken) => {
        this._token = token;
        
      })
  }

}
