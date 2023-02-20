 import { TextField,Button,Table } from "@mui/material";
import React, { useState } from "react";



export const TableData =()=>{
    const [fname,setFname] =useState('')
    const [lname,setLname] =useState('')
    const [faname,setFaName] =useState('')
    const [mobile,setMobile] =useState('')
    const [emails,setEmails] =useState('')
    const [con,setCon] =useState('')
    const [add,setAdd] =useState('')
    const [cit,setCit] =useState('')
    const [ste,setSte] =useState('')
    const [data,setData] =useState([])
    const handleAdd=() =>{
        setData([...data,{fname,lname,faname,mobile,emails,con,add,cit,ste}])
        setFname('')
        setLname('')
        setFaName('')
        setMobile('')
        setEmails('')
        setCon('')
        setAdd('')
        setCit('')
        setSte('')

    }

    return (
        <div>
            <h1>Table List</h1>
            <TextField variant="outlined" label="FirstName"onChange={(e)=>setFname(e.target.value)}/>
            <TextField variant="outlined" label="LastName"onChange={(e)=>setLname(e.target.value)}/>
            <TextField variant="outlined" label="FathersName"onChange={(e)=>setFaName(e.target.value)}/>
            <TextField variant="outlined" label="MobileNo"onChange={(e)=>setMobile(e.target.value)}/>
            <TextField variant="outlined" label="Email"onChange={(e)=>setEmails(e.target.value)}/>
            <TextField variant="outlined" label="Password"onChange={(e)=>setCon(e.target.value)}/>
            <TextField variant="outlined" label="Address"onChange={(e)=>setAdd(e.target.value)}/>
            <TextField variant="outlined" label="City"onChange={(e)=>setCit(e.target.value)}/>
            <TextField variant="outlined" label="State"onChange={(e)=>setSte(e.target.value)}/>
            <Button variant="contained"color="error"onClick={handleAdd}>Sumbit</Button>
            <Table border={2}>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>FathersName</th>
                    <th>MobileNo</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
                {data.map((item)=>{
                    return(
                        <tr>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.faname}</td>
                            <td>{item.mobile}</td>
                            <td>{item.emails}</td>
                            <td>{item.con}</td>
                            <td>{item.cit}</td>
                            <td>{item.ste}</td>
                        </tr>
                    )
                })}

            </Table>
        </div>
    )
}