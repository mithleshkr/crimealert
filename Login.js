import React from 'react';
import {TextField, Button} from '@material-ui/core';

function Login() {
    return (
        <div>
            
            <TextField  placeholder="Enter username" label="Username"/><br />
            <TextField  placeholder="Enter password" label="Password"/><br/><br />
            <Button variant="contained">Login</Button>
            <p>New User?<span></span></p>
            
            
        </div>
    )
}

export default Login

