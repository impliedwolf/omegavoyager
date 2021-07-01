var log = "Log #1<br>In orbit since this morning, preparing for the journey ahead. The speeds this vessel can achieve is astounding.<br>Bad idea to make any drastic changes in velocity. I do have access to a Jump function that moves the ship ahead while maintaining base speed.<br><br>"
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

var jumpinit = 6
var jumpdecr = 0.75
var jumpvelo = 0
var jumpcool = 1

function jump() {
  if (jumpcool < (12/(amnt3+2))) return 
  jumpcool = 0
  jumpvelo = jumpinit
  spacerock[0] += Math.random() * jumpinit * Math.pow(2,amnt2) * Math.pow(0.1,spacerock[1])
  for (let i = 0; i < 20; i++) {
    setTimeout(function() {
    distance[0] += jumpvelo * Math.pow(0.1,distance[1])
    distanceupd()
    distancedisp()
    jumpvelo *= jumpdecr
    }, 50 * i);
  }
}

setInterval(function(){
  jumpcool += 1
}, 100)

setInterval(function(){
  if (jumpvelo < jumpinit * Math.pow(jumpdecr,19)) {
    jumpvelo = 0
  }
}, 100)


function distancedisp() {
  if (distance[1] < 6) {
  document.getElementById("distance").textContent = "You have travelled " + ((distance[0] * Math.pow(10,distance[1])).toFixed(0)) + " miles";
  } else {
  document.getElementById("distance").textContent = "You have travelled " + ((distance[0]).toFixed(6)) + "e" + (distance[1]) + " miles"
  }
}

setInterval(function(){
  if (velocity[1] < 6) {
  document.getElementById("velocity").textContent = "Your ship moves at " + (((velocity[0] * Math.pow(10,velocity[1])) + (jumpvelo * 20)).toFixed(0)) + " miles per second.";
  } else {
  document.getElementById("velocity").textContent = "Your ship moves at " + ((velocity[0] + (jumpvelo * 20 / Math.pow(10,velocity[1])) ).toFixed(6)) + "e" + (velocity[1]) + " miles per second."
  }
}, 50)

var velocity = [0,0]

setInterval(function(){
  distance[0] += velocity[0] * 0.05 * Math.pow(0.1,distance[1]-velocity[1])
  spacerock[0] += velocity[0] * 0.15 * Math.pow(0.1,spacerock[1]-velocity[1]) * Math.random()
  distanceupd()
  distancedisp()
  velocityupd()
  velocitydisp()
  spacerockupd()
  spacerockdisp()
}, 50);

function velocityupd() {
  if (velocity[0] < 10){
    if (velocity[0] < 1) {
      if (velocity[1] > 0) {
        velocity[0] *= 10
        velocity[1] -= 1
      }
    }
  } else {
  velocity[0] /= 10
  velocity[1] += 1
}}

setInterval(function() {
  if (spacerock[0]*Math.pow(10,spacerock[1]-spacerockcap[1]) > spacerockcap[0]) {
    document.getElementById("spacerock").textContent = "Space rock supply: " + ((spacerockcap[0]).toFixed(6)) + "e" + (spacerockcap[1]) + "oz.";
    } else {
  if (spacerock[1] < 6) {
    document.getElementById("spacerock").textContent = "Space rock supply: " + ((spacerock[0] * Math.pow(10,spacerock[1])).toFixed(0)) + "oz.";
    } else {
    document.getElementById("spacerock").textContent = "Space rock supply: " + ((spacerock[0]).toFixed(6)) + "e" + (spacerock[1]) + "oz."
    }
    }
}, 50)

var spacerockcap = [1,6]
setInterval(function() {
  if (spacerock[0]*Math.pow(10,spacerock[1]-spacerockcap[1]) > spacerockcap[0]) {
      spacerock[0] = spacerockcap[0]
      spacerock[1] = spacerockcap[1]
  }
}, 50);

var cost1 = [6,1]
var amnt1 = 0

var cost2 = [1.2,3]
var amnt2 = 0

var cost3 = [8.1,4]
var amnt3 = 0

setInterval(function() {
  if (cost1[1] < 6) {
    document.getElementById("upgrade1").innerHTML = "Propellor<br>Owned: " + amnt1 + "<br>Cost: " + ((cost1[0] * Math.pow(10,cost1[1])).toFixed(0)) + " space rock"
    } else {
    document.getElementById("upgrade1").innerHTML = "Propellor<br>Owned: " + amnt1 + "<br>Cost: " + ((cost1[0]).toFixed(6)) + "e" + (cost1[1]) + " space rock"
  }
  if (cost2[1] < 6) {
    document.getElementById("upgrade2").innerHTML = "Jump Enhancement<br>Owned: " + amnt2 + "<br>Cost: " + ((cost2[0] * Math.pow(10,cost2[1])).toFixed(0)) + " space rock"
    } else {
    document.getElementById("upgrade2").innerHTML = "Jump Enhancement<br>Owned: " + amnt2 + "<br>Cost: " + ((cost2[0]).toFixed(6)) + "e" + (cost2[1]) + " space rock"
  }
  if (cost3[1] < 6) {
    document.getElementById("upgrade3").innerHTML = "Propellor Extension<br>Owned: " + amnt3 + "<br>Cost: " + ((cost3[0] * Math.pow(10,cost3[1])).toFixed(0)) + " space rock"
    } else {
    document.getElementById("upgrade3").innerHTML = "Propellor Extension<br>Owned: " + amnt3 + "<br>Cost: " + ((cost3[0]).toFixed(6)) + "e" + (cost3[1]) + " space rock"
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
  velocity[0] += Math.pow(amnt3+1,2) / Math.pow(10,velocity[1])
  cost1[0] *= 1.5
  costupd()
  spacerockdisp()
  velocityupd()
}

function buy2() {
  if (spacerock[0] * Math.pow(10,spacerock[1]) < cost2[0] * Math.pow(10,cost2[1])) return
  spacerock[0] -= cost2[0] * Math.pow(10,cost2[1]) * Math.pow(0.1,spacerock[1])
  amnt2 += 1
  cost2[0] *= 3
  costupd()
  jumpinit = 6 * Math.pow(2,amnt2)
  jumpdecr = 1 - (Math.pow(amnt2+1,-2))
  jumptime = 16 * (amnt2+2)
  spacerockdisp()
}

function buy3() {
  if (spacerock[0] * Math.pow(10,spacerock[1]) < cost3[0] * Math.pow(10,cost3[1])) return
  spacerock[0] -= cost3[0] * Math.pow(10,cost3[1]) * Math.pow(0.1,spacerock[1])
  amnt3 += 1
  cost3[0] *= 4
  velocity[0] += (amnt1 * (Math.pow(amnt3 + 1,2) - Math.pow(amnt3,2))) / Math.pow(10,velocity[1])
  costupd()
  spacerockdisp()
}


setInterval(function(){
  document.getElementById("debug").innerHTML = " "
},50)

function distanceupd(){
  if (distance[0] < 10) return
  distance[0] /= 10
  distance[1] += 1
}

setInterval(function(){
  if (spacerock[0] < 10){
    if (spacerock[0] < 1) {
      spacerock[0] *= 10
      spacerock[1] -= 1
    }
  } else {
  spacerock[0] /= 10
  spacerock[1] += 1
  }
}, 50)

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
