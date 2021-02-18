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

function App(props) {

  let history = useHistory()

  // App.js는 Router로 감싸져 있기에 history 사용 가능
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) { // 로그인 된 유저
        history.push('/')
        console.log('로그인 됨')
      } else {
        history.push('/login')
        console.log('로그인 안됨')
      }
    })
  }, [])

  return (
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} /> 
      </Switch>
  );
}

export default App;
