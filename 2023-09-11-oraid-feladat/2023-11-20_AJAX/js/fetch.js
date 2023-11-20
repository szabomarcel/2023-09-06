const inputid = document.querySelector("#id");
const inputDarab = document.querySelector("#darab");
const inputUsernam = document.querySelector("#username");
const buttonRead = document.querySelector("#read");
const body = document.getElementsByTagName("body")[0];
const cards = document.querySelector("#cards");

body.addEventListener("load",getAllUsers); //-- a lap betöltésekor
buttonRead.addEventListener("click", getAllUsers);

async function getAllUsers() {   
    let endpoint = "https://retoolapi.dev/Hfa9uy/data";
    /*let head = {method: "GET", mode: "no-cors", caches: "no-cache", headers:{"Content-type": "application/"},
    body: JSON.stringify(data)};*/
    try{
        const response = await fetch(endpoint, head); // head és body
        const users = await response.json(); //body to JSON
        console.log(users);
    }
    catch(error){
        console.log(error);
    }
}

function showAllUsers(params){
    params.forEach(users =>{
        appendCard(users);
        card = "<div id=\"cards\" class=\"row\"> <div class=\"card\" style=\"width: 18rem;\"> <img src=\"kepek/letöltés.png\" class=\"card-img-top\" alt=\"kepek/letöltés.png\"> <div class=\"card-body\"> <h5 class=\"card-title\">Card title</h5>" + users.id + "</h5>";
    });
}

function appendCard(users){
    cards. //append Chilld
}