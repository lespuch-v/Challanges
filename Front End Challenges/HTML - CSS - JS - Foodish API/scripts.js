const myButton = document.querySelector(".button-24")
const image = document.querySelector(".justAnImage")


myButton.addEventListener("click", myFunk())

async function myFunk(){
    const res = await fetch("https://foodish-api.herokuapp.com/api/")
    const data = await res.json()
    image.src = `${data.image}`
    console.log(data.image)
}