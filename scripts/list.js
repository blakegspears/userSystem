function displayUsers(usersArray){
    //travel the array (for)
    for(let i = 0; i < usersArray.length; i++){

        let user = usersArray[i];

        row=`
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.address}</td>
                <td>${user.contact}</td>
                <td>${user.payment}</td>
                <td style="background-color: ${user.color};"></td>
            </tr>
        `;
        $("#usersTable").append(row);//append the row into the table
    }
}
function init(){
    console.log("Listing users...");
    let users = readUsers();
    displayUsers(users);
}
window.onload=init;
