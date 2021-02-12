import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from './StateProvide';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51IJeMzHYhNwOZlNiJCuCr9ty5IX010wO6OgHCAIJ6vDkbh7Zw0J6L9Q8WmsiSMnueOaWwYZflVhMuZ7qpnNx3YBj006egte7It"
)

function App() {
  const [{basket}, dispatch] = useStateValue();
  useEffect(() => {
    //will only runs once when the app componet loads....   

    auth.onAuthStateChanged(authUser => {
      console.log("user >>> ",authUser);
        if(authUser){
          // that mens user loged in 
          dispatch({
            type: 'SET_USER',
            user: authUser 
          })


        }else{
          //that mens user logedout
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
            <Payment />
            </Elements>
            
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
