import React, {useState} from 'react';
import prettyError from '../../tools/prettyError'
import axios from 'axios'

const InLogin = () => {

    const [error, setError] = useState({status: false, message: ''})

    const handle = async (e) => {
        e.preventDefault()
        let res = await axios.post(localStorage.getItem('url')+'/influencer/login', {email: e.target.email.value,password: e.target.password.value})
        if(!res.data.error) return document.location.href = "/influencer"
        if(Object.keys(res.data.message).length === 0 && res.data.message.constructor === Object) return setError({status: true, message: 'Email or password incorrect!'})
        setError({status: true, message: prettyError(res.data.message)})
    }

    return (
        <div style={{display:'flex',alignItems:'center',height:'100vh', justifyContent:'center'}}>
            <div style={{maxWidth: 330}}>
                <h2 className="mb-5">Influencer Login</h2>
                <form onSubmit={handle}>
                    <input className="form-control mb-2" type="text" placeholder="Email" name="email"/>
                    <input className="form-control mb-2" type="password" placeholder="Password" name="password"/>
                    <input className="form-control mb-2" type="submit" value="Sign in"/>
                    {error.status ? <div class="alert alert-danger mt-4" role="alert"><div className="alert alert-danger mt-4">{error.message}</div></div> :null}
                </form>
            </div>
        </div>
    );
};

export default InLogin;