import axios from "axios";

export const getMethod = async(url) =>{
    
    const response = await axios.get(url)
        .then(data =>  data)
        .catch(error => error)
    return response.data;
    
}