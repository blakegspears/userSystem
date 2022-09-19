const KEY = "user";
function saveUser(user){
    let oldData = readUsers();
    oldData.push(user);
    let val = JSON.stringify(oldData);
    localStorage.setItem(KEY, val);
}

function readUsers(){
    //get the values from the LS
    let data = localStorage.getItem(KEY);
    console.log(data);
    if(!data){
        return [];
    }else{
        let list = JSON.parse(data);
        console.log(list);
        return list;
    }
}