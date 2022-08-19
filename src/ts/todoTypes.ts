import { TodoData } from "./dataType";

export interface TodoState {
  todo: TodoData[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCSESS = 'FETCH_TODO_SUCCSESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODO;
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODO_SUCCSESS;
  payload: any[];
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODO_ERROR;
  payload: string;
}

interface SetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetTodoPageAction;
