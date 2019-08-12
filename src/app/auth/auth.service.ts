import { Injectable } from '@angular/core';
import {  HttpErrorResponse } from '@angular/common/http';
import { throwError} from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from './user.mode';

import * as AuthActions from './store/auth.actions';
import * as fromApp from '../store/app.reducer';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  // user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer:any;



  constructor(private store:Store<fromApp.AppState>) { }


  // signUp(email: string, password: string) {
  //   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseAPIkey,
  //     {
  //       email: email,
  //       password: password,
  //       returnSecureToken: true
  //     }
  //   ).pipe(catchError(this.handleError),
  //     tap(resData => {
  //       this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
  //     })
  //   );
  // }

  // login(email: string, password: string) {
  //   return this.http.post<AuthResponseData>(
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseAPIkey, {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true
  //   }
  //   ).pipe(catchError(this.handleError),
  //     tap(resData => {
  //       this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
  //     }));
  // }






  setLogoutTimer(expirationDuration:number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer =  setTimeout(()=>{
    this.store.dispatch(new AuthActions.Logout());
    },expirationDuration)
  }


clearLogoutTimer (){
  if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null
  }
}



  //handling errors

}
