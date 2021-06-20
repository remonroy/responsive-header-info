import React, { useState,useEffect } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Notfound from './Component/Notfound/Notfound';
import ClockLoader from "react-spinners/ClockLoader";
function App() {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
    <div className="App">
      { loading ?
      ( <div className="codu"><ClockLoader color={'orange'} loading={loading} size={70} /></div> )
      :
        (<Router>
          <Navbar></Navbar>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router> )
       
      }
    </div>
  );
}

export default App;
