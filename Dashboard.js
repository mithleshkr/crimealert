import React,{useState, useEffect} from 'react'
import { Tabs, Tab, Button } from '@material-ui/core'
import './Dashboard.css'
import {useNavigate} from 'react-router-dom';

function Dashboard() {

    const [display, setDisplay] = useState([]);


    const showDetails = async() => {
        
        const res= await fetch("http://localhost:3333/post")
        .then((res)=>res.json())
        .then((data)=>setDisplay(data))
        console.warn("res", res);
    }
    
    useEffect(()=>{
        showDetails();
    },[]);
    const navigate=useNavigate();
    return (
        <div style={{display:"flex",flex:1,height:"100vh"}} >
            <div className="sidebar" style={{display:"flex",flex:1, width:"200px",backgroundColor:"whitesmoke",height:"100vh",flexDirection:"column"}}>
                <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                    <Tabs value={0} indicatorColor="primary">
                        <Tab label="Dashboard" />
                    </Tabs>
                    <Tabs>
                        <Tab label="Post" onClick={()=>navigate('/post')} />
                    </Tabs>
                    <Tabs>
                        <Tab label="Profile" onClick={()=>navigate('/profile')} />
                    </Tabs>

                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <Button variant="contained" color="secondary" onClick={()=>navigate('/')} >LogOut</Button>
                </div>
                
            </div>
            <div style={{display:"flex",flex:7,flexDirection:"column",height:"100vh",overflowY:"auto"}}>

                {display.map(post=>{
                    return(

                    

               
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                    <card className="card" style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column",height:"40vh",overflowY:"auto"}}> 
                        <div style={{display:"flex",justifyContent:"space-evenly"}}>
                       <p> {post.crimedate}</p>
                       <p>{post.crimetime}</p>
                       <p>{post.location}</p>
                        </div>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <img style={{width:100}} src={post.cimage} alt="not found" /> 
                        </div>
                        <div>
                            {post.about}
                        </div>
                    </card>
                
                </div>
                    )
                 })}
                
            </div>
            
        </div>
    )
}

export default Dashboard
