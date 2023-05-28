import axios from "axios"
 
// importation mt3 ptr postcontact
export const postauthRegister=async(values)=>{
    const addingUser = await axios.post('http://localhost:5002/auth/user/signup',{...values})
}

// importation mta3 fetch loginin admin et user

export const fetchAccount=async()=>{
    const token = localStorage.getItem('token')
const {data}=await axios.get('http://localhost:5002/auth/user/getaUser',{headers:{authorized:token}})
return data

}
export const fetchAccountAdmin=async()=>{
    const token = localStorage.getItem('token')
const {data}=await axios.get('http://localhost:5002/auth/admin/getAdmin',{headers:{authorized:token}})
return data

}
// admin requet

export const fetchContacts = async()=>{
    const {data} = await axios.get('http://localhost:5002/auth/admin/getaAdmin')
    return data 
}

export const PostCar =async (values)=>{
    const adding= await axios.post('http://localhost:5002/auth/admin/addCar',{...values})
}

export const updateCar = async(id,values)=>{
    const updated = await axios.put(`http://localhost:5002/auth/admin/updateCar/${id}`,values)
}

export const  deleteCar =async(id)=>{
    const deleted = await axios.delete(`http://localhost:5002/auth/admin/deleteCar/${id}`)
}

export const  getusercars =async()=>{
    const {data} = await axios.get(`http://localhost:5002/auth/user/getCars`)
    return data;
}



export const  getadmincars =async()=>{
    const {data} = await axios.get(`http://localhost:5002/auth/admin/getCars`)
    return data;
}

export const  getUniqueCar=async(id,values)=>{
const {data}= await axios.get(`http://localhost:5002/auth/admin/getCar/${id}`,values)
return data 
}


