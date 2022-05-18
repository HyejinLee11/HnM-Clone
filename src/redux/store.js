import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./reducers" // 이름을 임의로 준다. index.js를 자동으로 읽어온다
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;