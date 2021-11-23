import React,{useState} from 'react';
import { Avatar, Button, Grid ,Paper, TextField, Typography, Link} from '@material-ui/core';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik,Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
// import { useHistory } from "react-router-dom";
//import './Login.css'


const Login = () => {
    //const history=useHistory();
    const paperstyle={padding:20,height:'60vh',width:280,margin:"20px auto"}
    const avatarstyle={backgroundColor:"blue"}
    const btnstyle={margin:'8px 0'}
    const initialValues={
        username:"",
        password:"",
        remember:false
    }
    const validationSchema=Yup.object().shape({
        username:Yup.string().email('Please enter valid username').required("Required"),
        password:Yup.string().required("Required")
    })
    const onSubmit=(values,props)=>{
        props.resetForm()
        
        console.log(values)
        console.log(props)
    }
    const[password, setPassword]=useState("");
    const[usernm, setUsernm]=useState("");


    return(
        <div style={{background:"grey"}}>
            <Grid style={{display:"flex",justifyContent:"center",flex:1,height:'100vh'}}>
                <Paper elvation={10} style={paperstyle}>
                    <Grid align='center'>
                        <Avatar style={avatarstyle}><LockRoundedIcon /></Avatar>
                        <h2>Login</h2>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props)=>(
                            <Form>
                                
                    <Field as={TextField} 
                    helperText={<ErrorMessage name="username" style={{color:"red"}}/>}
                    label="Username"
                    name="username"
                    placeholder="Enter username"
                    value={usernm}
                    onChange={(e)=>setUsernm(e.target.value)}
                    fullWidth 
                    required />
                    <Field as={TextField}
                    helperText={<ErrorMessage name="password"/>}
                    label="Password" 
                    name="password"
                    placeholder="Enter password" 
                    type="password" 
                    value={password}
            onChange={(e)=>setPassword(e.target.value)}
                    fullWidth 
                    required />
                    <Field as={FormControlLabel}
                    name="remember"
                    control={
                    <Checkbox
                    name="checkedB"
                    color="primary"
                     />
                    }
                    label="Remember me"
                    />
                    <Button 
                    // onClick={() => history.push("Dashboard")}
                    style={btnstyle}
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={!password + !usernm}
                    fullWidth>
                    LOGIN
                    </Button>
                            </Form>
                        )}
                    </Formik>
                    <Typography> New user?
                        <Link href="signup">
                            Click Here
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>

    )
}
export default Login;
