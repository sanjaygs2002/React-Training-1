async function Server(){
 
    const api= await fetch("https://jsonplaceholder.typicode.com/photos");
    const res = await api.json();
    console.log(res);

    return(
        <>
        {res.map((item)=>{
            <li key={item.id}>{item.title}</li>
        })}
        
        </>
    )

}
export default Server;