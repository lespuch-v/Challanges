const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)

const button = document.querySelectorAll(".myBtn")

let isOn = false
function deckTheHalls() {
  isOn = !isOn
  if(isOn){
    house.innerHTML = "🎄🏡🎁"
  }else{
    house.innerHTML = "🏡"
  }
}

button.forEach(function(item){
  item.addEventListener("click", (e)=> {
    if(e.target.classList.contains("smile")){
      console.log("Smile")
      house.innerHTML = `😊${house.innerHTML}`
    }else if(e.target.classList.contains("church")){
      console.log("Church")
      house.innerHTML = `⛪${house.innerHTML}`
    }else if(e.target.classList.contains("bell")){
      console.log("Bell")
      house.innerHTML = `🔔${house.innerHTML}`
    }else if(e.target.classList.contains("candle")){
      console.log("Candle")
      house.innerHTML = `${house.innerHTML}🕯️`
    }else if(e.target.classList.contains("fire")){
      console.log("Fire")
      house.innerHTML = `${house.innerHTML}🔥`
    }else{
      console.log("Socks")
      house.innerHTML = `${house.innerHTML}🧦`
    }
  })
})


console.log(button)

