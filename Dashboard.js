import React from 'react'
import { Tabs, Tab, Button } from '@material-ui/core'
import './Dashboard.css'

function Dashboard() {
    return (
        <div style={{display:"flex",flex:1,height:"100vh"}} >
            <div className="sidebar" style={{display:"flex",flex:1, width:"200px",backgroundColor:"whitesmoke",height:"100vh",flexDirection:"column"}}>
                <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                    <Tabs value={0} indicatorColor="primary">
                        <Tab label="Dashboard" />
                    </Tabs>
                    <Tabs>
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
                <div>
                    hi
                
                </div>
                
            </div>
            
        </div>
    )
}

export default Dashboard
