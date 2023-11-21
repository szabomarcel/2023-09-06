const inputid = document.querySelector("#id");
const inputDarab = document.querySelector("#darab");
const inputUsername = document.querySelector("#username");
const buttonRead = document.querySelector("#read");
const buttonUpdate = document.querySelector("#update");
const buttonCreate = document.querySelector("#create");
const buttonDelete = document.querySelector("#delete");
const cards = document.querySelector("#cards");

window.addEventListener("load",getAllUsers); //-- a lap betöltésekor
buttonRead.addEventListener("click", getAllUsers);

async function getAllUsers() {   
    let endpoint = "https://retoolapi.dev/Hfa9uy/data";
    /*let head = {method: "GET", mode: "no-cors", caches: "no-cache", headers:{"Content-type": "application/"},
    body: JSON.stringify(data)};*/
    try{
        const response = await fetch(endpoint); // head és body
        const users = await response.json(); //body to JSON
        showAllUsers(users);
    }
    catch(error){
        console.log(error);
    }
}

/*function showAllUsers(params){
    removeAllChild(cards);
    params.forEach(users =>{
        appendCard(users);        
    });
}*/

function showAllUsers(params){
    let html = "";
    params.forEach(user =>{
        html += `<div class="card" style="width: 18rem;">
        <img src="kepek/images.png" class="card-img-top" alt="kepek/images.png">
        <div class="card-body">
            <h5 class="card-title">${user.id}. ${user.username}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <p class="card-text">értéke: ${user.darab} db</p>
            <button class="btn btn-primary" onclick="kivalaszt(${user.id})">Kiválasztás</button>
        </div>
        </div>`;
    });
    cards.innerHTML = html;
}

async function kivalaszt(id){
    let url = `https://retoolapi.dev/Hfa9uy/data/${id}`;
    try{
        const response = await fetch(url); // head és body
        const users = await response.json(); //body to JSON
        inputid.value = users.id;
        inputUsername.value = users.username;
        inputDarab.value = users.darab;     
        location.href = "#formEleje";   
    }catch(error){
        console.log(error);
    }
}

//-- Új user létrehozás
buttonCreate.addEventListener("click", async () => {
    let url = "https://retoolapi.dev/Hfa9uy/data";
    let data = {
        username: inputUsername.value, 
        darab: inputDarab.value
    }; 
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        });
        const user = await response.json();
        console.log(user);
        beviteliMezoAlaphelyzetben();
        getAllUsers();
    }catch(error){
        alert(error)
    }
});

//-- Törölt user eltávolítása
buttonDelete.addEventListener("click", async () => {
    let url = "https://retoolapi.dev/Hfa9uy/data";
    let data = {
        username: inputUsername.value, 
        darab: inputDarab.value}; 
        
    try{
        const response = await fetch(url,{
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        });
        const user = await response.json();        
        beviteliMezoAlaphelyzetben();
        getAllUsers();
        
    }catch(error){
        alert(error)
    }
});

function beviteliMezoAlaphelyzetben(){
    inputid = '';
    inputUsername = '';
    inputDarab = '1';
}

//-- Módosítás
buttonUpdate.addEventListener("click", async () => {
    let url = "https://retoolapi.dev/Hfa9uy/data";
    let data = {
        username: inputUsername.value, 
        darab: inputDarab.value}; 
        
    try{
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        });
        const user = await response.json();
        beviteliMezoAlaphelyzetben();
        getAllUsers();
    }catch(error){
        alert(error)
    }
});