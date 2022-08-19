import { IUserDate } from './dataType';
export enum userActionTypes {
  FETCH_USER = 'FETCH_USERS',
  FETCH_USER_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR ',
}

export interface IUserState {
  users: IUserDate[];
  loading: boolean;
  error: null | string;
}

interface IFeetchUserAction {
  type: userActionTypes.FETCH_USER;
}

interface IFeetchUserSuccesAction {
  type: userActionTypes.FETCH_USER_SUCCESS;
  payload: any[];
}

interface IFeetchUserErrorAction {
  type: userActionTypes.FETCH_USER_ERROR;
  payload: string;
}


export type UserAction =
  | IFeetchUserAction
  | IFeetchUserSuccesAction
  | IFeetchUserErrorAction;
