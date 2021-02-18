import {
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import ChatPage from './components/ChatPage/ChatPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import './App.css';
import { useEffect } from "react";

import firebase from './firebase'

import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/actions/user_action'

function App(props) {

  let history = useHistory()
  let dispatch = useDispatch()
  let isLoading = useSelector(state => state.user.isLoading)


  useEffect(() => { // App.js는 Router로 감싸져 있기에 history 사용 가능
    firebase.auth().onAuthStateChanged(user => {
      if(user) { // 로그인 된 유저
        history.push('/')
        
        dispatch(setUser(user)) // 로그인 된 유저 정보 -> redux
      } else {
        history.push('/login')
        
      }
    })
  }, [])

  if(isLoading) {
    return (
      <div>...loading</div>
    ) 
  }

  return (
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} /> 
      </Switch>
  );
}

export default App;
