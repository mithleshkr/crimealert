import React,{useState, useEffect} from 'react'
import { Tabs, Tab, Button, Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import logo from '../logo.svg';

import './Dashboard.css'

import Postform from './Postform';
import {useNavigate} from 'react-router-dom';


function Posts() {
    const navigate=useNavigate();

   
    const [display, setDisplay] = useState([]);

    const [about, setAbout] = useState("");
    const [crimedate, setCrimedate] = useState("");
    const [crimetime, setCrimetime] = useState("");
    const [location, setLocation] = useState("");
    const [cimage, setCimage] =useState();
    const [userid, setUserid] = useState("");
   

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
    const [dopen, setDopen] = React.useState(false);
    const deletePost = () =>
    {
        setDopen(true);
    }
    const deletePostClose = () =>
    {
        setDopen(false)
    }
    function deleteUser(id)
    {
        
        fetch(`http://localhost:3333/post/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Food Deletd Sucessfully")
            })
        })
    }

    const [eopen, setEopen] = React.useState(false);

   
    const editPostClose = () =>
    {
        setEopen(false)
    }

    function editPost  (id) {
        setEopen(true);
        console.warn("function called",display[id-1])
        let item= display[id-1];
        setAbout(item.about)
        setCrimedate(item.crimedate)
        setCrimetime(item.crimtime)
        setLocation(item.location)
        setCimage(item.cimage)
        setUserid(item.id)
       
      };

      function updatePost (){
      
        let item={about,crimedate, crimetime, location,cimage, userid}
        fetch(`http://localhost:3333/post/${userid}`,{
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                showDetails()
                alert("Update Successfully")
            })
        })
    }
//   const handleImage =(e)=>{
//       setCimage({image: e.target.files[0]});
//   }

    return (
        <div style={{display:"flex",flex:1,height:"100vh"}} >
        <div className="sidebar" style={{display:"flex",flex:1, width:"200px",backgroundColor:"whitesmoke",height:"100vh",flexDirection:"column"}}>
            <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <Tabs >
                    <Tab label="Dashboard" onClick={()=>navigate('/dashboard')} />
                </Tabs>
                <Tabs value={0} indicatorColor="primary">
                    <Tab label="Post" />
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
            <div style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:50}}>
            
                      <Button variant="contained" size="large" style={{height:50,position:"fixed"}}  onClick={handleClickOpen} >  <AddCircleOutlineOutlinedIcon /></Button>
                      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Post Details</DialogTitle>
        <DialogContent>
            <Postform />
        </DialogContent>
      </Dialog>
                   
            
            </div>
            {display.map(post =>{
                return(

            
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <card className="card" style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column",height:"40vh"}} >
                    <div >
                    <div className="container" style={{display:"flex",justifyContent:"space-evenly",flexDirection:"row"}}>
                <p>{post.crimedate}</p>
                
                <p>{post.crimetime}</p>
                <p>{post.location}</p>
                </div>
                <div>
                    
                    {/* <img style={{height:"20vh",width:500}} src={post.cimage} alt="ghghg"/> */}
                   <img style={{width:100}} src={post.cimage} alt="ghg" />   
                  
                    
                </div>
                <div style={{display:"flex",flexDirection:"row",overflowX:"auto"}}>
                    
                    {post.about}
                </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <Button size="small" variant="contained" onClick={()=>editPost(post.id)} >edit</Button>
                <Dialog open={eopen} onClose={editPostClose}>
                    <DialogTitle>Post Details</DialogTitle>
                    <DialogContent>
                        <div style={{display:"flex"}}>
                        <form style={{display:"flex",flexDirection:"column"}}>
                        <TextField label="about" placeholder="Enter about post" value={about} onChange={(e)=>{setAbout(e.target.value)}} />
                        <TextField label="crimedate" type="date" placeholder="Enter crime date" value={crimedate} onChange={(e)=>{setCrimedate(e.target.value)}} />
                        <TextField  type="time"  value={crimetime} onChange={(e)=>{setCrimetime(e.target.value)}} />
                        <TextField label="location" placeholder="Enter location" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
                        <TextField type="file" onChange={(e)=>{setCimage(e.target.files)}}  />
                        <Button onClick={updatePost}>Update</Button>
                        </form>
                        </div>
                    </DialogContent>
                </Dialog>
                <Button size="small"  onClick={()=>deletePost(post.id)} variant="contained">Delete</Button>
                <Dialog open={dopen} onClose={deletePostClose}>
                        {/* <DialogTitle>Food</DialogTitle> */}
                        <DialogContent>
                            <p>Are You sure want to delete?</p>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                            <Button onClick={()=>deleteUser(post.id) + window.location.reload(false)}  variant="contained" color="primary" >Delete</Button>
                            <Button onClick={()=>  window.location.reload(false)} type="submit" variant="contained" color="primary">Cancel</Button>
                            </div>
                        </DialogContent>
                        </Dialog>
                </div>
                </card>
                    
            </div>
                )
            })}
        
        </div>
        
    </div>
    )
}

export default Posts
