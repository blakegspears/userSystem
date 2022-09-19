function login(){
    console.log("login function");
    //get values from email and password
    let userName = $("#userName").val();
    let password = $("#userPass").val();
    console.log("login");
    //flag
    let flag=true;

//get users from LS
let users = readUsers();
//travel the array
for(let i = 0; i < users.length; i++){
    //compare the credentials
    let user = users[i];
    if(user.password == password && user.email == userName){
    //redirect user to users.html
    console.log("Welcome");
    window.location="users.html";
}
else{
    flag=false;
}
}//display the msg invalid credentials
if(!flag){
    $("#alert-error").removeClass("hide");
    setTimeout(function(){
        $("#alert-error").addClass("hide");
    },3000);
}
}
//display the msg invalid credentials
function init(){
    $("#loginBtn").click(login);
}
window.onload=init;