import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com" 
});


api.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Request header set:", config.headers.Authorization);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use((response)=>response,(error)=>{
    if(error.response && error.response.status===404){
        console.warn("Not Found");
        localStorage.removeItem("token")
    }
    return Promise.reject(error);
})


export default api;
