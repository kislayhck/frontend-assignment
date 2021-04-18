import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './components/loginPage/loginPage';
import MainBoard from './components/dashBoardPage/mainBoard';
import Home from './components/dashBoardPage/home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={LoginPage} />
    <Route path="/home" component={Home} />
    </div>
    </Router>
  );
}

export default App;
