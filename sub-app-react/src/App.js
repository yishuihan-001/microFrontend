import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './pages/home'
import Sun from './pages/sun'
import Moon from './pages/moon'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/sun">sun</Link></li>
          <li><Link to="/moon">moon</Link></li>
        </ul>
      </header>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/sun' component={Sun}/>
        <Route path='/moon' component={Moon}/>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
