import React,{useState, useEffect} from 'react'
import { Tabs, Tab, Button } from '@material-ui/core'
import './Dashboard.css'
import {useNavigate} from 'react-router-dom';

function Profile() {

    const [display, setDisplay] = useState([]);
    const [pdisplay, setPdisplay] = useState([]);

    const showPdetails = async() => {
        
        const res= await fetch("http://localhost:3333/post")
        .then((res)=>res.json())
        .then((data)=>setPdisplay(data))
        console.warn("res", res);
    }


    const showDetails = async() => {
        
        const res= await fetch("http://localhost:3333/user")
        .then((res)=>res.json())
        .then((data)=>setDisplay(data))
        console.warn("res", res);
    }
    
    useEffect(()=>{
        showDetails();
        showPdetails();
    },[]);
    const navigate=useNavigate();
    return (
        <div style={{display:"flex",flex:1,height:"100vh"}} >
        <div className="sidebar" style={{display:"flex",flex:1, width:"200px",backgroundColor:"whitesmoke",height:"100vh",flexDirection:"column"}}>
            <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <Tabs >
                    <Tab label="Dashboard" onClick={()=>navigate('/dashboard')} />
                </Tabs>
                <Tabs>
                    <Tab label="Post" onClick={()=>navigate('/post')} />
                </Tabs>
                <Tabs  value={0} indicatorColor="primary">
                    <Tab label="Profile" />
                </Tabs>

            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Button variant="contained" color="secondary" onClick={()=>navigate('/')} >LogOut</Button>
            </div>
            
        </div>
        <div style={{display:"flex",flex:7,flexDirection:"column",height:"100vh",overflowY:"auto"}}>
           <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div style={{display:"flex",backgroundColor:"whitesmoke",justifyContent:"space-evenly",alignItems:"center",width:"200px",height:"20vh"}}>
               <h1 style={{fontSize:"100px"}}> {pdisplay.length}</h1>
            
            </div>
            
            
        
          <div style={{display:"flex"}}>
            <p>Your total post</p>   
         </div> 
         </div>
         <div>
                 Your Details
             </div> 
         <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"whitesmoke",height:"30vh"}}>
             
             {display.map(post=>{
                 return(
                     <div style={{display:"flex",justifyContent:"space-around"}}>
                         {post.uname}
                         {post.uage}
                         {post.uemail}
                         {post.ucity}
                         {post.ucountry}
                         {post.uphone}
                     </div>
                 )
             })}
         </div>
        </div>
        
    </div>
    )
}

export default Profile
