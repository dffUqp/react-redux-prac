import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootRedicer } from './reducer';

export const store = createStore(rootRedicer, applyMiddleware(thunk));
