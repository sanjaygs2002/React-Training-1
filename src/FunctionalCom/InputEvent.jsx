const InputEvent=()=>{
    const handleChange=(e)=>{
        console.log(e.target.value);  
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }
    return (
        <>
        <input onChange={handleChange}></input>
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default InputEvent;