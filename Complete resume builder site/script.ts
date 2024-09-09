const aboutBtn:any = document.querySelector(".about-btn")
const eduBtn:any = document.querySelector(".edu-btn")
const skillBtn:any = document.querySelector(".skill-btn")
const expBtn:any = document.querySelector(".exp-btn")

const aboutCard:any = document.querySelector(".about-card")
const eduCard:any = document.querySelector(".edu-card")
const skillCard:any = document.querySelector(".skill-card")
const expCard:any = document.querySelector(".exp-card")

let aboutToggle = 0;
let eduToggle = 0;
let skillToggle = 0;
let expToggle = 0;

aboutBtn.addEventListener("click", ()=>{
    if(aboutToggle === 0){
        aboutCard.style.display = "block"
        aboutToggle = 1
    }
    else{
        aboutCard.style.display = "none"
        aboutToggle = 0
    }
})

eduBtn.addEventListener("click", ()=>{
    if(eduToggle === 0){
        eduCard.style.display = "block"
        eduToggle = 1
    }
    else{
        eduCard.style.display = "none"
        eduToggle = 0
    }
})

skillBtn.addEventListener("click", ()=>{
    if(skillToggle === 0){
        skillCard.style.display = "block"
        skillToggle = 1
    }
    else{
        skillCard.style.display = "none"
        skillToggle = 0
    }
})

expBtn.addEventListener("click", ()=>{
    if(expToggle === 0){
        expCard.style.display = "block"
        expToggle = 1
    }
    else{
        expCard.style.display = "none"
        expToggle = 0
    }
})
