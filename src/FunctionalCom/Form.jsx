import { useState } from "react";

function Form() {
const [state,setState]= useState({name:"",email:"",age:""});

const arr = [
  { id: 1, name: "test user1", mark: 20, text: "abc" },
  { id: 2, name: "test user2", mark: 60, text: "abcdef" },
  { id: 3, name: "test user3", mark: 40, text: "ab"  },
]

const map=arr.filter((item)=>item.mark>50 && item.text.length>5);
console.log(map);


function handleSubmit(e){
e.preventDefault();
if(state.age<21){
	alert("Age must is greater than 21")
        return;
}
console.log("Form data",state)
setState({name:"",email:"",age:""})
}

function handleClick(e){
const {name, value}= e.target;
setState({...state,[name]:value});

}

return(
<>
<form onSubmit={handleSubmit}>

<input type="text" name="name" value={state.name} onChange={handleClick} />
<input type= "email" name="email" value={state.email} onChange={handleClick} />
<input type= "number" name="age" value={state.age} onChange={handleClick} />

<button type="submit">Submit</button>
</form>
</>
)

}
export default Form;
