const mainContainer = document.querySelector(".div-container")
const image = document.querySelector(".imgs")
const NUMBER_OF_ITERRATIONS = 15

const unsplash = "https://source.unsplash.com/user/erondu/1600x900"
const foodish = "https://foodish-api.herokuapp.com/api/"
const ipsum = "https://picsum.photos/200/300"


function getImages(){
    for(let i = 0; i < NUMBER_OF_ITERRATIONS; i++){
        fetch(ipsum)

            .then(data => {
                console.log(data.url)
                mainContainer.innerHTML +=
                `
                <img class="imgs" src="${data.url}" alt="my-image">
                `
            })
}
}
getImages()




// const dataImage = async function myFunction(){
//     const response = await fetch("https://foodish-api.herokuapp.com/api/")
//     const data = await response.json()
// }


// function myFunk() {
//     fetch('https://foodish-api.herokuapp.com/api/')
//         .then(res => res.json())
//         .then(data => generatedImage = data)
//         .then(() => console.log(generatedImage.image))
// }


// Works
// function myFunk() {
//     fetch('https://foodish-api.herokuapp.com/api/')
//         .then(res => res.json())
//         .then(data => {
//             for(let i = 0; i < NUMBER_OF_ITERRATIONS; i++){
//                 mainContainer.innerHTML +=
//                 `
//                 <img class="imgs" src="${data.image}" alt="my-image">
//                 `
//             }
//             })
// }