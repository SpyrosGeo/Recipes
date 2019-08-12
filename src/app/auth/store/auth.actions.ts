import { Action } from '@ngrx/store';


export const LOGIN_START ='[Auth] Login Start';
export const  AUTHENTICATE_SUCCESS = '[Auth] Login';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] Logout';
export const CLEAR_ERROR ='[Auth] Clear Error'
export const SIGNUP_START = '[Auth] Signup Start';
export const AUTO_LOGIN = '[Auth] Auto Login';


export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
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

export class LoginStart implements Action{
  readonly type = LOGIN_START;
  constructor(public payload:{email:string,password:string}){}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;
  constructor(public payload:string ){}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(public payload:{email:string,password:string}){}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;

}
export type AuthActions =
 AuthenticateSuccess|
             Logout |
         LoginStart |
   AuthenticateFail |
        SignupStart |
         ClearError |
           AutoLogin;
