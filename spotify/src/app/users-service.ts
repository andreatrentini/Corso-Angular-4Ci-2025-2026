import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { IUser } from './interfaces/i-user';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpClient: HttpClient = inject(HttpClient);

  // Conterrà i dati dell'utente ricevuti dal server di autenticazione 
  private _userData: WritableSignal<IUser | null> = signal<IUser | null>(null);
  userData: Signal<IUser | null> = this._userData.asReadonly();

  private _isLogged: WritableSignal<boolean> = signal(false);
  isLogged: Signal<boolean> = this._isLogged.asReadonly();

  private _loginError: WritableSignal<boolean> = signal(false);
  loginError: Signal<boolean> = this._loginError.asReadonly();

  private url: string = 'https://dummyjson.com/user/login';

  login(userName: string, password: string): void {
    let httpHeader = new HttpHeaders()
      .set('Content-Type', 'application/json');
    
      let userdata: any = {
        username: userName,
        password: password
      }
    
    this.httpClient.post<IUser>(this.url, userdata, {headers: httpHeader}).pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
    )
    .subscribe({
      next: (data: IUser) => {
        this._userData.set(data);
        this._isLogged.set(true);
      },
      error: ((err: Error) => {
        this._loginError.set(true);
      })
    })
  }

  logout(): void {
    this._isLogged.set(false);
    this._userData.set(null);
  }

  handleError(error: HttpErrorResponse) {    
    return throwError(() => new Error('Username o password errati'));
  }

}
