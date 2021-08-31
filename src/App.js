import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Fooder from './components/Fooder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import MyLab from './components/MyLab';
import Contact from './components/Contact';
import Result from './mylabs/Result';

function App() {
  return (
    <div>
      <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route path ='/about' component = {About} />
        <Route path ='/mylab' component = {MyLab} />
        <Route path ='/result' component = {Result} />
        {/* <Route path ='/contact' component = {Contact} /> */}
        <Route path = '/contact'><Contact /> <Fooder /></Route> 
      </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
