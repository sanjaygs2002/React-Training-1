import { useState } from "react";

function LoginForm(){
    const [input, setInput]= useState({email:"",password:""})

    function handleChange(e){
        setInput({...input,[e.target.name]:[e.target.value]})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form data submitted",input);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input name="email"
            type="email"
            onChange={handleChange} />
            <input name="password"
            type="password"
            onChange={handleChange}/>
            <button type="sumbit">Submit</button>
        </form>
        </>
    )
}

export default LoginForm;