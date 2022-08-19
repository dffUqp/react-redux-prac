import * as userActionCreators from './todo';
import * as todoActionCreators from './user';

const ActionCreators = {
  ...userActionCreators,
  ...todoActionCreators,
};

export default ActionCreators