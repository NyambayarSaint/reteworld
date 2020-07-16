import React, {useEffect, useState} from 'react'
import axios from 'axios'

const CoRegister = () => {

    useEffect(()=>{

    },[])

    const [error, setError] = useState({status: false, messages: []})

    const handle = async (e) => {
        e.preventDefault()
        let res = await axios.post('/company/register', {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        })
        console.log(res,'res')
        if(res.data.errors){
            let msgs = []
            for (var key in res.data.errors) if (res.data.errors.hasOwnProperty(key)) msgs.push({field: key, value: res.data.errors[key].properties.message})
            return setError({status: true, messages: msgs})
        }
        
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
                {error.status ? error.messages.map((err,i)=>{
                    return(
                    <p key={'err'+i} >{err.field} - {err.value}</p>
                    )
                }):null}
            </div>
        </div>
    );
};

export default CoRegister;