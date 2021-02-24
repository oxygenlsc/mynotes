import './App.css';
import {BrowserRouter as Router ,NavLink,Route,Switch} from 'react-router-dom'
import CounterContainer from './containers/counterContainer'
import StudentContainer from './containers/studentContainer'
function App() {
  return (
    <Router>
    <aside>
      <NavLink to='/counter'>计算</NavLink>
      <NavLink to='/student'>学生</NavLink>
    </aside>
    <Switch>
    <Route path='/counter' component={CounterContainer} /> 
    <Route path='/student' component={StudentContainer} /> 
    </Switch>
    </Router>
  );
}

export default App;
