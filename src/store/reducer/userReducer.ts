import { IUserState, UserAction, userActionTypes } from '../../ts/userTypes';

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case userActionTypes.FETCH_USER:
      return { ...state, loading: true };

    case userActionTypes.FETCH_USER_SUCCESS:
      return { ...state, users: action.payload, loading: false };

    case userActionTypes.FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
