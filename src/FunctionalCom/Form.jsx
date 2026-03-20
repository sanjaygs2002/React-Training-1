import { useState } from "react";

function Form(){

    const [name,setName]= useState("");

    const handleChange=(e)=>{
        setName(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted",name);

    }
    //const patternName= /[A-Za-z0-9]{8,}/

    return(
        <>
        <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange} />
                <button type="submit">Submit</button>
        </form>
       
        </>
    )
}
export default Form;