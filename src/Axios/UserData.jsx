import React, { useEffect, useState } from 'react';
import axios from "axios";


const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer token";
  return config;
});

const UserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
 
    api.get("/users")
      .then(res => setUsers(res.data))  // data, status, statusText, config, response, headers
      .catch(err => console.log(err));

  
    api.post("/users", {
      name: "Sanjay",
      email: "sanjay@gmail.com"
    })
    .then(res => {
      
      setUsers(prev => [...prev, res.data]);
    })
    .catch(err => console.log(err));

    api.patch("/users/1",{
        name:"Ram"
    })
    .then(res=>setUsers(prev =>
          prev.map(user =>
            user.id === res.data.id ? { ...user, ...res.data } : user
          )
        ))
    .catch(err=>console.log(err))
  }, []);

  return (
    <ul>
      {users.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default UserData;
