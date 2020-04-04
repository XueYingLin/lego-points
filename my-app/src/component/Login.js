import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push("/");

    }

    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                 />
                 <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                 />
                 <button>Submit</button>
            </form>
        </>
    )

}

export default Login;