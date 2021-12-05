const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
const ursInput = document.getElementById("name")
const customMsg = document.getElementById("msg")
const submit = document.getElementById("submit")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]
submit.addEventListener("click", function(e){
    e.preventDefault()
    if(customMsg.value != ""){
        greetingDisplay.innerText = customMsg.value
    }
})

function writeGreeting(){

    // Inputs for Name and Yellow Button!
    if(ursInput.value == ""){
        const myRandom = greetings[Math.floor(Math.random() * greetings.length)]
        greetingDisplay.innerText = myRandom
    }else{
        const myRandom = greetings[Math.floor(Math.random() * greetings.length)]
        greetingDisplay.innerText =  `Hello! ${ursInput.value.charAt(0).toUpperCase() + ursInput.value.slice(1)}! ${myRandom}`
    }
}
