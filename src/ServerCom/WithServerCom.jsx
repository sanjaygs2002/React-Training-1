async function WithServerCom(){
 
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
export default WithServerCom;

// Runs on the server
// Without using useEffect hooks

// Benefits
// Faster load (no client fetch)
// Better SEO
// Less JS bundle