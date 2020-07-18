import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import LandingPage from "./views/LandingPage";
import NotFound from "./views/NotFound";

import CoLogin from "./views/company/Login";
import CoRegister from "./views/company/Register";
import CoIndex from "./views/company/Index";

import InLogin from "./views/influencer/Login";
import InRegister from "./views/influencer/Register";
import InIndex from "./views/influencer/Index";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

localStorage.setItem('url', '');

function App() {

  const [redirectUnauthorized, setredirectUnauthorized] = useState(false)
  const [loaded, setLoaded] = useState({ status: false, result: "" });

  useEffect(() => {

    async function send() {
      try {
        let res = await axios(localStorage.getItem('url')+"/authenticate");
        if(res.data === "Co") return setLoaded({status: true, result: res.data})
        console.log(res, "success");
        throw new Error ('Something wrong')
      } catch (e) {
        setredirectUnauthorized(true)
      }
    }
    send();
  }, []);

  return (
    <Router>
      <div className="App">
        {redirectUnauthorized ? <Redirect to="/landing"/>:null}
        <Switch>
          {!loaded.status ? (
            <Route path="/" exact component={Loading} />
          ) : loaded.result === "Co" ? (
            <Route path="/company" component={CoIndex} />
          ) : (
            <Route path="/influencer" component={InIndex} />
          )}
          <Route path="/landing" component={LandingPage} />
          <Route path="/company/login" component={CoLogin} />
          <Route path="/company/register" component={CoRegister} />
          <Route path="/influencer/login" component={InLogin} />
          <Route path="/influencer/register" component={InRegister} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

const Loading = () => {
return <p>Loading...</p>;
};

export default App;
