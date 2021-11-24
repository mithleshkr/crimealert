import React,{useState} from 'react'
import {TextField, Button} from '@material-ui/core';

function Postform() {

    const [about, setAbout] = useState("");
    const [crimedate, setCrimedate] = useState("");
    const [crimetime, setCrimetime] = useState("");
    const [location, setLocation] = useState("");

    function save() {
        console.warn({ about, crimedate, crimetime, location });
        let data={ about, crimedate, crimetime, location }
        fetch("http://localhost:3333/post",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
         }).then((result)=>{
             console.warn("result",result);
            
    
         })
      }
    return (
        <div >
            <form style={{display:"flex",flexDirection:"column"}}>
                <TextField label="About Post" placeholder="Write about the post" value={about} onChange={(e)=>{setAbout(e.target.value)}} />
                <TextField type="date" value={crimedate} onChange={(e)=>{setCrimedate(e.target.value)}} />
                <TextField type="time" value={crimetime} onChange={(e)=>{setCrimetime(e.target.value)}} />
                <TextField label="location" placeholder="Enter crime location" value={location} onChange={(e)=>{setLocation(e.target.value)}} /><br/>
                <Button variant="contained" size="small" color="primary" onClick={save}>Add</Button>
            </form>
            
        </div>
    )
}

export default Postform
