import { TodoActionTypes } from '../../ts/todoTypes';
import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction } from '../../ts/todoTypes';
import { ITodoRespond } from '../../ts/dataType';

export const fetchTodo = (
  page = 1,
  limit = 10,
  pagination: null | ((item: string) => void) = null
) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODO });
      const responds: ITodoRespond = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            _page: page,
            _limit: limit,
          },
        }
      );
      pagination && pagination(responds.headers['x-total-count']);

      dispatch({
        type: TodoActionTypes.FETCH_TODO_SUCCSESS,
        payload: responds.data,
      });
    } catch (error) {
      dispatch({ type: TodoActionTypes.FETCH_TODO_ERROR, payload: 'Error' });
    }
  };
};

export const setPageTodo = (page: number) => {
  return (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: TodoActionTypes.SET_TODO_PAGE, payload: page });
  };
};
