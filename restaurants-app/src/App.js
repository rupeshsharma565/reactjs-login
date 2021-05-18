import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import RestaurantsList from "./components/RestaurantsList";
import RestaurantDeatail from "./components/RestaurantDeatail";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantCreate from "./components/RestaurantCreate";
import Login from "./components/Login";
import NavBarMenu from "./components/NavBarMenu";
import Logout from "./components/Logout";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Route path="/list"><RestaurantsList /></Route>
        <Route path="/create"><RestaurantCreate /></Route>
        <Route path="/search"><RestaurantSearch /></Route>

        <Route path="/update/:id" render={props=>(<RestaurantUpdate 
        {...props} />)}></Route>
        <Route path="/logout"><Logout /></Route>
        <Route path="/login" render={props=>(<Login 
        {...props} />)}></Route>
        <Route path="/" exact><Home /></Route>
      </Router>
    </div>
  );
}

export default App;
