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
console.log(aUser);
//clear inputs
$("input").val("");
}

function init() {

}