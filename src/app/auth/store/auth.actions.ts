import { Action } from '@ngrx/store';


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: {
    email: string;
    userId: string;
    token: string;
    expirationDate: Date
  }
  ) {}
}
export class Logout implements Action{
  readonly type = LOGOUT;
  //added the constructor because angular was asking for payload property
  //turns out it was an error in  the auth.reducer that  i fixed
  // constructor(public payload: any = null){}
}
export type AuthActions = Login | Logout;
