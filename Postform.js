import React,{useState} from 'react'
import {TextField, Button} from '@material-ui/core';

function Postform() {

    const [about, setAbout] = useState("");
    const [crimedate, setCrimedate] = useState("");
    const [crimetime, setCrimetime] = useState("");
    const [location, setLocation] = useState("");
    const [cimage, setCimage] = useState(null);
    function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append(cimage);
        console.warn({ about, crimedate, crimetime, location, cimage});
        let data={ about, crimedate, crimetime, location,cimage}
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

      const handleImage = (e)=>{
          setCimage(URL.createObjectURL(e.target.files[0]));
      }
    //   function imgPick(e)
    //   {
    //     setCimage(e.target.files[0]);
    //     console.log("22222222");
    //     console.log(cimage)
    //   }

    //    function handleChange (e) 
    //    {
           
    //      if(e.target.files.length)
    //      {
    //          setCimage({preview:URL.createObjectURL(e.target.files[0])});
    //      }
    //    }
    
    return (
        <div >
            <form style={{display:"flex",flexDirection:"column"}}>
                <TextField label="About Post" placeholder="Write about the post" value={about} onChange={(e)=>{setAbout(e.target.value)}} />
                <TextField type="date" value={crimedate} onChange={(e)=>{setCrimedate(e.target.value)}} />
                <TextField type="time" value={crimetime} onChange={(e)=>{setCrimetime(e.target.value)}} />
                <TextField label="location" placeholder="Enter crime location" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
                <input   onChange={handleImage} type="file"  />
                
                <br/>
                <Button variant="contained" size="small" color="primary" onClick={save}>Add</Button>
            </form>
            
        </div>
    )
}

export default Postform
