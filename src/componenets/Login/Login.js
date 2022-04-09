import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>This is Login</h2>
            <div style={{margin:'10px'}}>
            <button onClick={singInWithGoogle}>Google Sogn In</button>
            </div>

            <form>
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;