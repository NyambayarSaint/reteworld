import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            Landing Page <br />
            <>
                <Link to={"/company/login"}>Company Login</Link>
                <Link to={"/company/register"}>Company Register</Link>
                <Link to={"/influencer/login"}> Influencer Login</Link>
                <Link to={"/influencer/register"}> Influencer Register</Link>
            </>
        </div>
    );
};

export default LandingPage;
