import axios from 'axios'

export const Userlogin = async (username: any,password: any) =>{
const {data} = await axios.post('/api/login',{username,password});
return {data}
}