let mygtukai = document.getElementById('mygtukai')
let nuotraukos = document.getElementById("nuotraukos").children;
let rodyti = document.getElementById("rodyti");
let maisyti = document.getElementById("maisyti");
let nerodyti = document.getElementById("nerodyti");





function rodytiNuotraukas() {
    document.getElementById("nuotraukos").style.display = "block";
    rodyti.style.display = "none";
    document.getElementById("maisyti").style.display = "inline-block";
    document.getElementById("nerodyti").style.display = "inline-block";
  }

function maišytiNuotraukas() {
  for (let i = nuotraukos.length; i >= 0; i--) {
    document.getElementById("nuotraukos").appendChild(nuotraukos[Math.random() * i | 0]);
  }
}

function nerodytiNuotraukas() {
    document.getElementById("nuotraukos").style.display = "none";
    rodyti.style.display = "block";
    maisyti.style.display = "none";
    nerodyti.style.display = "none";
  }