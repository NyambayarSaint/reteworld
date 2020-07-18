import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <section
            className="jumbotron text-center"
            style={{ height: "100vh", display: "flex", alignItems: "center" }}
        >
            <div className="container">
                <h1 className="jumbotron-heading">Landing page</h1>
                <p className="lead text-muted">
                    Something short and leading about the collection below—its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don't simply skip over it entirely.
                </p>
                <div>
                    <Link to={"/company/login"}>
                        <span href="#" className="btn btn-primary my-2">
                            Company Login
                        </span>
                    </Link>
                    <Link to={"/company/register"}>
                        <span href="#" className="btn btn-secondary my-2">
                            Company Register
                        </span>
                    </Link>
                </div>

                <div>
                    <Link to={"/influencer/login"}>
                        <span href="#" className="btn btn-primary my-2">
                            Influencer Login
                        </span>
                    </Link>
                    <Link to={"/influencer/register"}>
                        <span href="#" className="btn btn-secondary my-2">
                            Influencer Register
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
