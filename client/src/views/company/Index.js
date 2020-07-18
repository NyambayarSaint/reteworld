import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Logout from './operations/logout';

const CoIndex = () => {
    return (
        <div>
            Company Index
            <Link to="/company/menu">Menu</Link>
            <Link to="/company/menu2">Menu2</Link>
            <input type="submit" value="Log out" onClick={()=>Logout()} />
            <Switch>
                <Route path="/company/menu" component={Menu} />
                <Route path="/company/menu2" component={Menu2} />
            </Switch>
        </div>
    );
};

export default CoIndex;

const Menu = () => {
    return(
        <p>Menu is here!</p>
    )
}
const Menu2 = () => {
    return(
        <p>Menu2 is here!</p>
    )
}