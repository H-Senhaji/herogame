// Write your JS here
let hero = {
    name: 'Ltl',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type: "ak", damage: 2}
}


function rest(x) { 
if (x.health === 10){
    alert("Health is full")
    } 
    x.health = 10
    hero.health = 10
return x
}

function pickUpItem(xHero,yItem) {
    if(xHero && yItem) { 
        xHero.inventory.push(yItem)
    } else {
        hero.inventory.push({type: "dagger", damage: 2})
    }
}

function equipWeapon(heroLike) {
    if(heroLike.inventory && heroLike.inventory.length > 0 ){
    heroLike.weapon = heroLike.inventory[0]
    } else {
        hero.weapon = hero.inventory[0]
    }
}

//pickup img
let pickUpImg = window.document.createElement("IMG");
pickUpImg.setAttribute("id", "dagger");
pickUpImg.src = "https://cdn.myanimelist.net/s/common/uploaded_files/1451364946-46b1023a0777c1fd2bb1630166360bd7.jpeg";
pickUpImg.addEventListener("click", pickUpItem);
document.body.appendChild(pickUpImg);
//rest img
let restImg = document.createElement("IMG");
restImg.setAttribute("id", "inn");
restImg.src = "https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg";
restImg.addEventListener("click", rest);
document.body.appendChild(restImg);
//equip img
let equipImg = document.createElement("IMG");
equipImg.setAttribute("id", "bag");
equipImg.src = "https://static5.comicvine.com/uploads/original/11112/111120069/5567626-8081005527-44809.jpg";
equipImg.addEventListener("click", equipWeapon);
document.body.appendChild(equipImg);
 
function addUserName() {
    let person = prompt("Please enter your name", "Brave Warrior");
    if (person != null) {
      document.getElementById("Greeting").innerHTML =
        "Hello " + person + "! Ready for your adventure?";
      hero.name = person;
    }
    displayStats();
  }
  
  function displayStats() {
    document.getElementById("showName").innerHTML = "name:" + hero.name;
    document.getElementById("showHeroic").innerHTML = "heroic:" + hero.heroic;
    document.getElementById("showHealth").innerHTML = "health:" + hero.health;
    document.getElementById("showWeapon").innerHTML =
      "weapon:" + hero.weapon.type;
    document.getElementById("showDamage").innerHTML =
      "damage:" + hero.weapon.damage;
  }
  

