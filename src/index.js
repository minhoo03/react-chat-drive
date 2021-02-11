import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './redux/reducers'

import 'bootstrap/dist/css/bootstrap.min.css';

// store 생성 전 promise와 함수 처리 미들웨어
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
  <React.StrictMode>
    {/* App을 Redux 감쌈 */}
    <Provider store={createStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
