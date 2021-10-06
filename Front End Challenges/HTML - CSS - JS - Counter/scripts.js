const btnDecrease = document.querySelector(".btn-decrease")
const btnReset = document.querySelector(".btn-reset")
const btnIncrease = document.querySelector(".btn-increase")
const number = document.querySelector(".counter")

let count = 0

btnDecrease.addEventListener("click", ()=>{
    count += 1
    number.textContent = count
})
btnIncrease.addEventListener("click", ()=>{
    count -= 1 
    number.textContent = count
})
btnReset.addEventListener("click", ()=>{
    count = 0
    number.textContent = count
})