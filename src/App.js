
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Not Found/NotFound';
import Expore from './Pages/Explore/Expore';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Expore></Expore>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
