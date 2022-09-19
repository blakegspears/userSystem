//object constructor
function User(email,password,firstname,lastname,age,gender,color,address,contact,payment) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.color = color;
    this.address = address;
    this.contact = contact;
    this.payment = payment;

}

function isValid(user){
        let valid= true;
        $("input").removeClass("input-error");
    
        if(user.email == ""){
            valid= false;
            $("#userEmail").addClass("input-error");
            console.log("Please enter an email address");
        }
        if(user.firstname==""){
            valid= false;
            $("#userFirstName").addClass("input-error");
            console.log("Please enter a first name");
        }
        if(user.lastname==""){
            valid= false;
            $("#userLastName").addClass("input-error");
            console.log("Please enter a last name");
        }
        if(user.contact==""){
            valid= false;
            $("#userContact").addClass("input-error");
            console.log("Please enter a phone number");
        }
        if(user.password.length==0){
            valid= false;
            $("#userPassword").addClass("input-error");
            console.log("Please enter a password");
        }
        return valid;
    }
    function validatePass(){
        console.log("Validating password");
        let inputPass = $("#userPassword");//getting the input
        let password = inputPass.val();//getting the value
        if(password.length<6){
            displayError("Password must be at least 6 characters");
            inputPass.css("background-color", "yellow");
            console.log("Password is too short");

        }else{
       
            console.log("Password length is correct");
            inputPass.css("background-color", "#98ff9a");
            hideError();
            

    }
}
    function displayError(msg){
        $("#alert-error").removeClass("hide").text(msg);
    }
    function hideError(msg){
        $("#alert-error").addClass("hide");
    }

//getting the values from the inputs
function register(){
    let txtEmail = $("#userEmail").val();
    let txtPassword = $("#userPassword").val();
    let txtFirstName = $("#userFirstName").val();
    let txtLastName = $("#userLastName").val();
    let txtAge = $("#userAge").val();
    let selColor = $("#userColor").val();
    let txtGender = $("#userGender").val();
    let txtAddress = $("#userAddress").val();
    let txtContact = $("#userContact").val();
    let selPayment = $("#userPayment").val();

//create the user object
let aUser = new User(txtEmail, txtPassword, txtFirstName, txtLastName, txtAge, selColor, txtGender, txtAddress, txtContact,selPayment);
//display the object in the console
if(isValid(aUser)){
    hideError();
    saveUser(aUser);
//clear inputs
    $("input").val("");
}else{
    displayError("Please complete all the highlighted fields.");
}
}

function init() {
//hook event
$("#btnSave").on("click", register);
$("#btnClose").on("click", function(){
    $(".form-container").hide();
});

$("#btnShowForm").on("click", function(){
    //$(".form-container").show();
   $(".form-container").slidedown(2000);
   
});

$("#userPassword").keyup(validatePass);

}
window.onload=init;