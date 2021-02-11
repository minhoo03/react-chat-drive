import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChatPage from './components/ChatPage/ChatPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={ChatPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} /> 
        </Switch>
    </Router>
  );
}

export default App;
