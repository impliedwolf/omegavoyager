var log = "Log #1<br>Just taken off into orbit, preparing for the journey ahead. The speeds this vessel can achieve is astounding.<br>Bad idea to make any drastic changes in velocity. I do have access to a Jump function that moves the ship ahead while maintaining base speed.<br><br>"
logupd()
function logupd() {
  document.getElementById("diary").innerHTML = log
}

var distance = [0,0]
var spacerock = [0,0]

{document.body.style.background = "#000000";}

for (let i = 0; i < 4; i++) {
  function colour(i) {
    document.getElementById("button" + (i)).style.backgroundColor = "#ffbb00";
    return
  }
  function nocolour(i) {
    document.getElementById("button" + (i)).style.backgroundColor = "#ffcc00";
    return
  }
}

var jumpinit = 10
var jumpdecr = 0.75
var jumpvelo = 0
var jumptime = 20

function jump() {
  jumpvelo = jumpinit
  spacerock[0] += Math.random() * jumpinit * Math.pow(2,amnt2) * Math.pow(0.1,spacerock[1]) 
  spacerockupd()
  spacerockdisp()
  for (let i = 0; i < jumptime; i++) {
    setTimeout(function() {
    distance[0] += jumpvelo * Math.pow(0.1,distance[1])
    distanceupd()
    distancedisp()
    jumpvelo *= jumpdecr
    }, 50 * i);
  }
}

function distancedisp() {
  if (distance[1] < 6) {
  document.getElementById("distance").textContent = "You have travelled " + ((distance[0] * Math.pow(10,distance[1])).toFixed(0)) + " miles";
  } else {
  document.getElementById("distance").textContent = "You have travelled " + ((distance[0]).toFixed(6)) + "e" + (distance[1]) + " miles"
  }
}

function velocitydisp() {
  if (velocitysize = 1) {
  document.getElementById("velocity").textContent = "Your ship moves at " + (normvelo.toFixed(0)) + " miles per second."
  }
}

var normvelo = 0

setInterval(function(){
  distance[0] += normvelo * 0.05 * Math.pow(0.1,distance[1])
  spacerock[0] += normvelo * 0.005 * Math.pow(0.1,spacerock[1])
  distanceupd()
  distancedisp()
  velocityupd()
  velocitydisp()
  spacerockupd()
  spacerockdisp()
}, 50);

function velocityupd() {
  normvelo = Math.pow(amnt1,2+amnt3)
}

function spacerockdisp() {
  if (spacerock[1] < 6) {
    document.getElementById("spacerock").textContent = "Space rock supply: " + ((spacerock[0] * Math.pow(10,spacerock[1])).toFixed(0)) + "oz.";
    } else {
    document.getElementById("spacerock").textContent = "Space rock supply: " + ((spacerock[0]).toFixed(6)) + "e" + (spacerock[1]) + "oz."
    }
}

var cost1 = [6,1]
var amnt1 = 0

var cost2 = [1,3]
var amnt2 = 0

var cost3 = [9.6,4]
var amnt3 = 0

setInterval(function() {
  if (cost1[1] < 6) {
    document.getElementById("upgrade1").innerHTML = "Propellor<br>Owned: " + amnt1 + "<br>Cost: " + ((cost1[0] * Math.pow(10,cost1[1])).toFixed(0)) + " space rock"
    } else {
    document.getElementById("upgrade1").innerHTML = "Propellor<br>Owned: " + amnt1 + "<br>Cost: " + ((cost1[0]).toFixed(6)) + "e" + (cost1[1]) + "space rock"
  }
  if (cost2[1] < 6) {
    document.getElementById("upgrade2").innerHTML = "Jump Enhancement<br>Owned: " + amnt2 + "<br>Cost: " + ((cost2[0] * Math.pow(10,cost2[1])).toFixed(0)) + " space rock"
    } else {
    document.getElementById("upgrade2").innerHTML = "Jump Enhancement<br>Owned: " + amnt2 + "<br>Cost: " + ((cost2[0]).toFixed(6)) + "e" + (cost2[1]) + "space rock"
  }
  if (cost3[1] < 6) {
    document.getElementById("upgrade3").innerHTML = "Propellor Extension<br>Owned: " + amnt3 + "<br>Cost: " + ((cost3[0] * Math.pow(10,cost3[1])).toFixed(0)) + " space rock"
    } else {
    document.getElementById("upgrade3").innerHTML = "Propellor Extension<br>Owned: " + amnt3 + "<br>Cost: " + ((cost3[0]).toFixed(6)) + "e" + (cost3[1]) + "space rock"
  }
}, 50)

setInterval(function(){
  if (spacerock[0] * Math.pow(10,spacerock[1]) < cost1[0] * Math.pow(10,cost1[1])) {
    document.getElementById("upgrade1").style.backgroundColor = "#223355";
  }
  if (spacerock[0] * Math.pow(10,spacerock[1]) > cost1[0] * Math.pow(10,cost1[1])) {
    document.getElementById("upgrade1").style.backgroundColor = "#443355";
  }
  if (spacerock[0] * Math.pow(10,spacerock[1]) < cost2[0] * Math.pow(10,cost2[1])) {
    document.getElementById("upgrade2").style.backgroundColor = "#223355";
  }
  if (spacerock[0] * Math.pow(10,spacerock[1]) > cost2[0] * Math.pow(10,cost2[1])) {
    document.getElementById("upgrade2").style.backgroundColor = "#443355";
  }
  if (spacerock[0] * Math.pow(10,spacerock[1]) < cost3[0] * Math.pow(10,cost3[1])) {
    document.getElementById("upgrade3").style.backgroundColor = "#223355";
  }
  if (spacerock[0] * Math.pow(10,spacerock[1]) > cost3[0] * Math.pow(10,cost3[1])) {
    document.getElementById("upgrade3").style.backgroundColor = "#443355";
  }
}, 50);

function buy1() {
  if (spacerock[0] * Math.pow(10,spacerock[1]) < cost1[0] * Math.pow(10,cost1[1])) return
  spacerock[0] -= cost1[0] * Math.pow(10,cost1[1]) * Math.pow(0.1,spacerock[1])
  amnt1 += 1
  cost1[0] *= 1.5
  costupd()
  cost1[0] = (cost1.toFixed(0))
  spacerockdisp()
  upgradedisp()
  velocityupd()
}

function buy2() {
  if (spacerock[0] * Math.pow(10,spacerock[1]) < cost2[0] * Math.pow(10,cost2[1])) return
  spacerock[0] -= cost2[0] * Math.pow(10,cost2[1]) * Math.pow(0.1,spacerock[1])
  amnt2 += 1
  cost2[0] *= 3
  costupd()
  cost2[0] = (cost2[0].toFixed(0))
  jumpinit = 10 * Math.pow(2,amnt2)
  jumpdecr = 1 - 1/(Math.pow(amnt2+2,2))
  jumptime = 10 * (amnt2+2)
  spacerockdisp()
  upgradedisp()
}

function buy3() {
  if (spacerock[0] * Math.pow(10,spacerock[1]) < cost3[0] * Math.pow(10,cost3[1])) return
  spacerock[0] -= cost3[0] * Math.pow(10,cost3[1]) * Math.pow(0.1,spacerock[1])
  amnt3 += 1
  cost3[0] *= 4
  costupd()
  cost3[0] = (cost3.toFixed(0))
  spacerockdisp()
  upgradedisp()
}


setInterval(function(){
  document.getElementById("debug").innerHTML = " "
},50)

function distanceupd(){
  if (distance[0] < 10) return
  distance[0] /= 10
  distance[1] += 1
}

function spacerockupd(){
  if (spacerock[0] < 10){
    if (spacerock[0] < 1) {
      spacerock[0] *= 10
      spacerock[1] -= 1
    }
  } else {
  spacerock[0] /= 10
  spacerock[1] += 1
  }
}

function costupd(){
  if (!(cost1[0] < 10)) {
  cost1[0] /= 10
  cost1[1] += 1
  }
  if (!(cost2[0] < 10)) {
  cost2[0] /= 10
  cost2[1] += 1
  }
  if (!(cost3[0] < 10)) {
  cost3[0] /= 10
  cost3[1] += 1
  }
}