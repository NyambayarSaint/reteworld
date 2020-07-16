import React from 'react';

const CoLogin = () => {
    return (
        <div>
            Company Login
            <form>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default CoLogin;