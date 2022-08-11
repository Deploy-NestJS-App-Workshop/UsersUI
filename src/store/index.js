import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import counterReducer from './reducers/counter.reducer';
import usersReducer from './reducers/users.reducer';


const rootReducer = combineReducers({
  counts: counterReducer,
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger) // list of middlewares
);
// export const store = createStore(rootReducer);

export default store;