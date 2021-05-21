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
import Protected from "./components/Protected";

import Logout from "./components/Logout";


function App() {
  return (
    <div className="App">
      <Router>
        
        {/* <Route path="/list"><RestaurantsList /></Route>
        <Route path="/create"><RestaurantCreate /></Route>
        <Route path="/search"><RestaurantSearch /></Route> */}
        {/* <Route path="/update/:id" render={props=>(<RestaurantUpdate 
        {...props} />)}></Route> */}
        <Route path="/logout"><Logout /></Route>
        <Route path="/login" render={props=>(<Login 
        {...props} />)}></Route>

        {/* <Route path="/" exact><Home /></Route> */}
        <Protected path="/"  component={Home} exact />
        <Protected path="/list"  component={RestaurantsList}  />
        <Protected path="/create"  component={RestaurantCreate}  />
        <Protected path="/search"  component={RestaurantSearch}  />
        <Protected path="/update/:id"  component={RestaurantUpdate}  />


      </Router>
    </div>
  );
}

export default App;
