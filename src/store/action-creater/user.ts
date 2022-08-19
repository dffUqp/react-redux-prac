import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, userActionTypes } from '../../ts/userTypes';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: userActionTypes.FETCH_USER });
      const responds = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      dispatch({
        type: userActionTypes.FETCH_USER_SUCCESS,
        payload: responds.data,
      });
    } catch (error) {
      dispatch({ type: userActionTypes.FETCH_USER_ERROR, payload: 'Error' });
    }
  };
};
