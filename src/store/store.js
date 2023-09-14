import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const middleware = [thunk];

const composeEnhancers = composeWithDevTools(
  applyMiddleware(...middleware)
);

const store = createStore(
  allReducers,
  composeEnhancers
);

export default store;
