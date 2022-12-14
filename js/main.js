"use strict";
let slides = [
    {
        legend : "Panda partie ",
        image : "/images/1.jpg"
    },
    {
        legend : "Zen attitude",
        image : "/images/2.jpg"
    },
    {
        legend : "Couché du soleil",
        image : "/images/3.jpg"
    },
    {
        legend : "Pluie d'étoiles",
        image : "/images/4.jpg"
    },
    {
        legend : "Pièce montée",    
        image : "/images/5.jpg"
    },
    {
        legend : "Pause gourmande",
        image : "/images/6.jpg"
    }
];

const TOOLBAR = document.querySelector("#toolbar-toggle");
const UL = document.querySelector("nav.toolbar ul");
var state ={};
var interval;
const NEXT_BTN = document.querySelector("#slider-next");
const PREV_BTN = document.querySelector("#slider-previous");
const RAND_BTN = document.querySelector("#slider-random");
const IMG_TAG = document.querySelector("#slider img");
const FIGCAPTION = document.querySelector("#slider figcaption");
const PLAY_BTN = document.querySelector("#slider-toggle");
var pauseIcon = PLAY_BTN.children;

document.addEventListener("DOMContentLoaded", ()=>{
    console.log(pauseIcon[0].classList);
    TOOLBAR.addEventListener("click", () => {
        UL.classList.toggle("hide");
    });
    
    state.index = 0;
    state.timer = false;
    refreshSlider();
    
    NEXT_BTN.onclick = next;
    PREV_BTN.onclick = previous;
    RAND_BTN.onclick = refreshSlider;
  
    PLAY_BTN.addEventListener("click", (e)=>{
        state.timer = !state.timer;
        refreshSlider();
        if(state.timer === true){
            pauseIcon[0].classList = "fa fa-pause";
            PLAY_BTN.setAttribute("title", "Arréter le carroussel");
            interval = setInterval(next, 2000);
        } else {
            clearInterval(interval);
            pauseIcon[0].classList = "fa fa-play";
            PLAY_BTN.setAttribute("title", "Démarrer le carrousel");
        };

});
  
});

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  function refreshSlider(){ 
    state.index = getRandomInt( 1, slides.length);
    IMG_TAG.src = slides[state.index-1].image;
    FIGCAPTION.textContent = slides[state.index-1].legend;

};
function next(){
    
    state.index += 1;
    IMG_TAG.src = slides[state.index-1].image;
    FIGCAPTION.textContent = slides[state.index-1].legend;
    if (state.index > slides.length-1){
        var index = 0;
        state.index = index;
    }
    
};
function previous(){
        state.index -= 1;
        if (state.index === 0 ){
            var index = 6;
            state.index = index;
        }
        IMG_TAG.src = slides[state.index-1].image;
        FIGCAPTION.textContent = slides[state.index-1].legend;
        console.log(state.index);
       
};
