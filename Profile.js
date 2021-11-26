import React,{useState, useEffect} from 'react'
import { Tabs, Tab, Button, DialogTitle, Dialog, DialogContent, TextField } from '@material-ui/core'
import './Dashboard.css'
import {useNavigate} from 'react-router-dom';
import  EditIcon  from '@material-ui/icons/Edit';


function Profile() {

    const [uname, setUname] = useState("");
    const [uemail, setUemail] = useState("");
    const [upassword, setUpassword] = useState("");
    const [uage, setUage] = useState("");
    const [uphone, setUphone] = useState("");
    const [ucity, setUcity] = useState("");
    const [ucountry, setUcountry] = useState("");
    const [userid, setUserid] = useState("");

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

    const [open, setOpen] =React.useState(false);
     const editUserClose = ()=>
     {
         setOpen(false)
     }

     function editUser (id)
     {
         setOpen(true)
         console.log("function called",display[id-1])
        let item= display[id-1];
        setUname(item.uname)
        setUemail(item.uemail)
        setUpassword(item.upassword)
        setUage(item.uage)
        setUphone(item.uphone)
        setUcity(item.ucity)
        setUcountry(item.ucountry)
        setUserid(item.id)
       
     }

     function updateUser (){
        
        let item={uname,uemail,upassword,uage,uphone,ucity,ucountry, userid}
        fetch(`http://localhost:3333/user/${userid}`,{
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
    const navigate=useNavigate();

    const nameChangeHandler = (e) => {

        if (e.target.value.match(/[a-z]/i) || e.target.value === '') {
    
          setUname(e.target.value);
         
    
        }
        }
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
         <br/>
         <br/>
         <div style={{display:"flex",justifyContent:"space-evenly"}}>
                 Your Details
             </div> 
         <div style={{display:"flex",justifyContent:"space-evenly",height:"30vh"}}>
             
             {display.map(post=>{
                 return(
                     <div style={{display:"flex",backgroundColor:"whitesmoke",width:"50%",justifyContent:"center"}}>
                         <div style={{display:"flex",flex:1,flexDirection:"column"}}>
                             <div style={{display:"flex",flex:1}}>
                             <span style={{marginRight:"5px"}}>Name:- </span> 
                         {post.uname}
                         </div>

                         <div style={{display:"flex",flex:1}}>
                         <span style={{marginRight:"5px"}}>Age:- </span> 
                        {post.uage}
                        </div>

                        <div style={{display:"flex",flex:1}}>
                        <span style={{marginRight:"5px"}}>Email:- </span> 
                        {post.uemail}
                        </div>
                         </div>

                         <div style={{display:"flex",flexDirection:"column"}}>
                             <div style={{display:"flex",flex:1}}>
                             <span style={{marginRight:"5px"}}>Phone:- </span>   
                         {post.uphone}
                         </div>

                         <div style={{display:"flex",flex:1}}>
                         <span style={{marginRight:"5px"}}>City:- </span> 
                        {post.ucity}
                        </div>

                        <div style={{display:"flex",flex:1}}>
                        <span style={{marginRight:"5px"}}>Country:- </span> 
                        {post.ucountry}
                        </div>
                         </div>
                         
                            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",marginTop:180}}>
                         <Button variant="contained" color="primary" onClick={()=>editUser(post.id)}>{<EditIcon />}</Button>
                         <Dialog open={open} onClose={editUserClose}>
                             <DialogTitle>User Details</DialogTitle>
                             <DialogContent>
                             <form style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
                    <TextField fullWidth value={uname} onChange={(e)=>{nameChangeHandler(e)}} label="Name" placeholder="Enter your name" type="text" required/>
                    <TextField fullWidth value={uemail} onChange={(e)=>{setUemail(e.target.value)}} label="Email" placeholder="Enter your email" type="email" required />
                    <TextField fullWidth value={upassword} onChange={(e)=>{setUpassword(e.target.value)}} label="Password" placeholder="Enter your password" type="password" required/>
                    <TextField fullWidth value={uage} onChange={(e)=>{setUage(e.target.value)}} label="Age" placeholder="Enter your age" type="number" required/>
                    <TextField fullWidth value={uphone} onChange={(e)=>{setUphone(e.target.value)}} label="Phone" placeholder="Enter your phone number" type="number" required/>
                    <TextField fullWidth value={ucity} onChange={(e)=>{setUcity(e.target.value)}} label="City" placeholder="Enter your city" type="text" required/>
                    <TextField fullWidth value={ucountry} onChange={(e)=>{setUcountry(e.target.value)}} label="Country" placeholder="Enter your Country" type="text" required /> 
                    
                    <br/>
                    <Button disabled={!uname + !uemail + !upassword + !uage + !uphone + !ucity +!ucountry} type="button" variant="contained" color="primary" onClick={updateUser} >
                        Update user
                    </Button>
                </form>
                             </DialogContent>

                         </Dialog>
                         </div>
                     </div>
                     
                 )
             })}
         </div>
        </div>
        
    </div>
    )
}

export default Profile
