import React from 'react';

const InRegister = () => {
    return (
        <div>
            Influencer Register
            <form>
                <input type="text" name="username"/>
                <input type="text" value="email"/>
                <input type="password" value="password"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default InRegister;