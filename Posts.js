import React,{useState, useEffect} from 'react'
import { Tabs, Tab, Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import './Dashboard.css'

import Postform from './Postform';

function Posts() {

   
    const [display, setDisplay] = useState([]);

    const showDetails = async() => {
        const res= await fetch("http://localhost:3333/post")
        .then((res)=>res.json())
        .then((data)=>setDisplay(data))
        console.warn("res", res);
    }
    useEffect(()=>{
        showDetails();
    },[])
    

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div style={{display:"flex",flex:1,height:"100vh"}} >
        <div className="sidebar" style={{display:"flex",flex:1, width:"200px",backgroundColor:"whitesmoke",height:"100vh",flexDirection:"column"}}>
            <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <Tabs >
                    <Tab label="Dashboard" />
                </Tabs>
                <Tabs value={0} indicatorColor="primary">
                    <Tab label="Post" />
                </Tabs>
                <Tabs>
                    <Tab label="Profile" />
                </Tabs>

            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Button variant="contained" color="secondary" >LogOut</Button>
            </div>
            
        </div>
        <div style={{display:"flex",flex:7,flexDirection:"column",height:"100vh",overflowY:"auto"}}>
            <div style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:50}}>
            
                      <Button variant="contained" size="large" style={{height:50}} onClick={handleClickOpen}>  <AddCircleOutlineOutlinedIcon /></Button>
                      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Post Details</DialogTitle>
        <DialogContent>
            <Postform />
        </DialogContent>
      </Dialog>
                   
            
            </div>
            {display.map(post =>{
                return(

            
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <p>{post.about}</p>
            </div>
                )
            })}
        
        </div>
        
    </div>
    )
}

export default Posts
