
import { User } from '../user.mode';

export interface State {
  user :User
}


const initialState: State = {
  user:null
}





export function authReducer(state = initialState,action){
  return state;
}
