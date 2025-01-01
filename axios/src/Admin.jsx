import React, { useEffect, useState } from 'react'
import { getUser } from './Api\'s/UserService'

const Admin = () => {

    const[userData,userDataUpdate]=useState([])

    useEffect(()=>{
        const fetchuser = async ()=>{
            try{
                const data=await getUser();
                userDataUpdate(data);
            }
            catch{
                alert("not")
            }
        };
        fetchuser();
    },[])


 
  return (
    <>
    {
        userData.map((e)=>(
            <h1>{e.name}</h1>
        ))
    }
    
      
    </>
  )
}



export default Admin
