import React, {useEffect, useState} from 'react'
import axios from 'axios'
import prettyError from '../../tools/prettyError'

const CoRegister = () => {

    const [error, setError] = useState({status: false, message: <p>No Error</p>})

    const handle = async (e) => {
        e.preventDefault()
        let res = await axios.post(localStorage.getItem('url')+'/company/register', {username: e.target.username.value,email: e.target.email.value,password: e.target.password.value})
        if(!res.data.error) return document.location.href = "/company"
        setError({status: true, message: prettyError(res.data.message)})
    }
    
    return (
        <div>
            Company Register
            <form onSubmit={handle}>
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="email" placeholder="E-mail"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Submit"/>
            </form>
            <div>
                {error.status ? error.message :null}
            </div>
        </div>
    );
};

export default CoRegister;