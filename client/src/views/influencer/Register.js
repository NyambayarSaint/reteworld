import React, {useState} from 'react';
import axios from 'axios'
import prettyError from '../../tools/prettyError'

const InRegister = () => {

    const [error, setError] = useState({status: false, message: <p>No Error</p>})

    const handle = async (e) => {
        e.preventDefault()
        let res = await axios.post(localStorage.getItem('url')+'/influencer/register', {username: e.target.username.value,email: e.target.email.value,password: e.target.password.value})
        if(!res.data.error) return document.location.href = "/influencer"
        setError({status: true, message: prettyError(res.data.message)})
    }

    return (
        <div style={{display:'flex',alignItems:'center',height:'100vh', justifyContent:'center'}}>
            <div style={{maxWidth: 330}}>
                <h2 className="mb-5">Influencer Register</h2>
                <form onSubmit={handle}>
                    <input className="form-control mb-2" type="text" placeholder="Username" name="username"/>
                    <input className="form-control mb-2" type="text" placeholder="Email" name="email"/>
                    <input className="form-control mb-2" type="password" placeholder="Password" name="password"/>
                    <input className="form-control mb-2" type="submit" value="Sign up"/>
                    {error.status ? <div class="alert alert-danger mt-4" role="alert"><div className="alert alert-danger mt-4">{error.message}</div></div> :null}
                </form>
            </div>
        </div>
    );
};

export default InRegister;