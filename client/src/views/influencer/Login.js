import React from 'react';

const InLogin = () => {
    return (
        <div>
            Influencer Login
            <form>
                <input type="text" name="username"/>
                <input type="password" value="password"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default InLogin;