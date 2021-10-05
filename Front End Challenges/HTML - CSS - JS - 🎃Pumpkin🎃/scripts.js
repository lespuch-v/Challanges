// Defining variables. 
const button = document.getElementById("btn-beautify")
const justHeader = document.getElementById("justHeader")
const killButton = document.getElementById("btn-remove")


// Add styling button
button.addEventListener("click", function(){
    justHeader.classList.add("goldenStyle")
    justHeader.innerText = "🔥Pumpkin🔥"

    button.classList.add("killButton")
    killButton.classList.remove("killButton")
})

// Remove styling button
killButton.addEventListener("click", function(){
    justHeader.classList.remove("goldenStyle")
    justHeader.innerText = "🎃Pumpkin🎃"

    killButton.classList.add("killButton")
    button.classList.remove("killButton")
})