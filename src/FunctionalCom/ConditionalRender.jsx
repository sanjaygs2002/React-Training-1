// function ConditionalRender(){
//     let isLogged = true;
//     if(isLogged){
//         return <h1>Welcome</h1>
//     }else{
//         return <h1>Login first</h1>
//     }
// }
// export default ConditionalRender;

function ConditionalRender() {
  let isLogged = true;
  return <>{isLogged ? <h1>Welcome</h1> : <h1> Login</h1>}</>;
}

export default ConditionalRender;
