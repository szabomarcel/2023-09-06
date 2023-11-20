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
    removeAllChild(cards);
    params.forEach(users =>{
        appendCard(users);        
    });
}

function appendCard(users){
   //-- minden felhasználót egy új div-be helyezünk
   let userCard = document.createElement("div"); //-- alapértelmezett div-et hozunk létre
   userCard.className = "card"; //-- beáálítjuk a class tulajdonságot
   userCard.style.cssText = "width: 18rem;"; //-- beállítjuk a style tulajdonságot
   /* a card-on lévő többi elemet (h5, img, p, ...) nem egyenként hozzáadjuk, 
       hanem szövegként az innerHTML tulajdonság segítségével fogjuk 
       létrehozni és beállítani őket.
   */
   let tartalom = `<img src="noimage.jpg" class="card-img-top" alt="noimage.jpg">
   <div class="card-body">
       <h5 class="card-title">${user.id}. ${user.username}</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
           card's content.</p>
       <p>értéke: ${user.darab} db</p>
       <button class="btn btn-primary" value="${user.id}" onclick="kivalasztottFelhasznaloAdatainakBetolteseBeviteliMezokbe(this.value)">Kiválasztás</button>
   </div>`;
   userCard.innerHTML = tartalom;

   cards.appendChild(userCard); //-- létrehozott objektumot behelyezzük a DOM-ba
}