export function Protectedroute({ children }){
  if (!localStorage.getItem("token")){
    location.href = "/login";
    return;
  }
    return children;
}


export function logout(){
    localStorage.removeItem("token");
    location.href = "/login";
    return;
}