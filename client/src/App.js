import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './views/LandingPage'
import CoIndex from './views/company/Index'
import InIndex from './views/influencer/Index'
import NotFound from './views/NotFound'
import CoLogin from "./views/company/Login";
import InLogin from "./views/influencer/Login";
import CoRegister from "./views/company/Register";
import InRegister from "./views/influencer/Register";

function App() {
    useEffect(() => {
        console.log("Mounted!");
        setTimeout(() => {
            // set(true);
        }, 500);
    }, []);

    const [load, set] = useState(false);

    return (
        <Router>
            <div className="App">
                <Switch>
                    {load ? (
                        <Route path="/" exact component={CoIndex} />
                    ) : (
                        <Route path="/" exact component={LandingPage} />
                    )}
                    <Route path="/company/login" component={CoLogin} />
                    <Route path="/influencer/login" component={InLogin} />
                    <Route path="/company/register" component={CoRegister} />
                    <Route path="/influencer/register" component={InRegister} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
