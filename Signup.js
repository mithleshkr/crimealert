import React from 'react'
import { Grid , Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';


function Signup()  {

    const paperstyle={padding:'30px 20px', width:300, margin:'20px auto'}
    const headerstyle={margin:0}
    const avatarstyle={backgroundColor:'blue'}
    return (
        
        <Grid>
            <Paper elevation={20} style={paperstyle}>
                <Grid align="center">
                    <Avatar style={avatarstyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                
                <h2 style={headerstyle}>Sign Up</h2>
                <Typography variant='caption'>Please fill this form to create an account</Typography>
                </Grid>
                <form style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
                    <TextField fullWidth label="Name" placeholder="Enter your name" type="text" required/>
                    <TextField fullWidth label="Email" placeholder="Enter your email" type="email" required />
                    <TextField fullWidth label="Password" placeholder="Enter your password" type="password" required/>
                    <TextField fullWidth label="Age" placeholder="Enter your age" type="number" required/>
                    <TextField fullWidth label="Phone" placeholder="Enter your phone number" type="number" required/>
                    <TextField fullWidth label="City" placeholder="Enter your city" type="text" required/>
                    <TextField fullWidth label="Country" placeholder="Enter your Country" type="text" required /> <br/>
                    <Button type="submit" variant="contained" color="primary" >
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Grid>
        
    )
}

export default Signup
