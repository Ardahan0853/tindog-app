import dogs from "/data.js"
import newDow from "/Dog.js"


let numberArray = [0, 1, 2]


function getNewDog(){
    let nextDogData = dogs[numberArray.shift()]
    return nextDogData ? new newDow(nextDogData) : {}
    
    
}


const firstDog = new newDow(dogs[0])

let  otherDogs = getNewDog()


function render(){
    
    document.getElementById("image-div").innerHTML = firstDog.getDogHtml()
    image.style.backgroundImage = `url(${firstDog.avatar})`

}

render()

function render2(){
    document.getElementById("image-div").innerHTML = otherDogs.getDogHtml()
    image.style.backgroundImage = `url(${otherDogs.avatar})`
    
}




document.getElementById("like").addEventListener("click", function(){
    
    const rotated = document.getElementById("rotated-id")
    rotated.style.opacity = "1"
    setTimeout(()=>{
        otherDogs = getNewDog()
        render2()
        
    }, 2000)
})

document.getElementById("dislike").addEventListener("click",function(){
    const rotated = document.getElementById("rotated-id")
    
    rotated.style.opacity = "1"
    rotated.innerHTML = `<img src="/images/badge-nope.png"></img>`
    setTimeout(()=>{
        otherDogs = getNewDog()
        render2()
        
    }, 2000)
} )
