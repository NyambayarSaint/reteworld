import React, {useEffect, useState} from 'react'
import axios from 'axios'
import prettyError from '../../tools/prettyError'

const CoLogin = () => {

    useEffect(()=>{

    },[])

    const [error, setError] = useState({status: false, message: <p>No Error</p>})

    const handle = async (e) => {
        e.preventDefault()
        let res = await axios.post(localStorage.getItem('url')+'/company/login', {email: e.target.email.value,password: e.target.password.value})
        if(!res.data.error) return document.location.href = "/company"
        console.log(res.data.message)
        if(Object.keys(res.data.message).length === 0 && res.data.message.constructor === Object) return setError({status: true, message: <p>Unknown error has occured :(</p>})
        setError({status: true, message: prettyError(res.data.message)})
    }
    
    return (
        <div>
            Company Login
            <form onSubmit={handle}>
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

export default CoLogin;