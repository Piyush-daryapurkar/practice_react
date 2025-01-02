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
       
     <form >
     <thead>
            <td>name</td>
            <td>id</td>
            <td>mobile</td>
        </thead>
    {
      
        userData.map((e)=>(
            <>
               <tbody>
               <td>{e.name}</td>
                <td>{e.id}</td>
                <td>{e.mobile}</td>
               </tbody>

            </>
        ))
    }
     </form>
    
      
    </>
  )
}



export default Admin