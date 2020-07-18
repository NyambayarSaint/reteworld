import React from 'react';
import Logout from './operations/logout'

const InIndex = () => {
    return (
        <div>
            Influencer Index
            <button className="btn btn-default border" onClick={()=>Logout()}>Logout</button>
        </div>
    );
};

export default InIndex;