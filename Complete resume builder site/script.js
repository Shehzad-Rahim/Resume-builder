"use strict";
const aboutBtn = document.querySelector(".about-btn");
const eduBtn = document.querySelector(".edu-btn");
const skillBtn = document.querySelector(".skill-btn");
const expBtn = document.querySelector(".exp-btn");
const aboutCard = document.querySelector(".about-card");
const eduCard = document.querySelector(".edu-card");
const skillCard = document.querySelector(".skill-card");
const expCard = document.querySelector(".exp-card");
let aboutToggle = 0;
let eduToggle = 0;
let skillToggle = 0;
let expToggle = 0;
aboutBtn.addEventListener("click", () => {
    if (aboutToggle === 0) {
        aboutCard.style.display = "block";
        aboutToggle = 1;
    }
    else {
        aboutCard.style.display = "none";
        aboutToggle = 0;
    }
});
eduBtn.addEventListener("click", () => {
    if (eduToggle === 0) {
        eduCard.style.display = "block";
        eduToggle = 1;
    }
    else {
        eduCard.style.display = "none";
        eduToggle = 0;
    }
});
skillBtn.addEventListener("click", () => {
    if (skillToggle === 0) {
        skillCard.style.display = "block";
        skillToggle = 1;
    }
    else {
        skillCard.style.display = "none";
        skillToggle = 0;
    }
});
expBtn.addEventListener("click", () => {
    if (expToggle === 0) {
        expCard.style.display = "block";
        expToggle = 1;
    }
    else {
        expCard.style.display = "none";
        expToggle = 0;
    }
});
