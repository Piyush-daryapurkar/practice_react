import axios from 'axios'

const API="http://localhost:3000/users"

export const getUser=async()=>{
       const responce=await axios.get(API)
       return responce.data;
}