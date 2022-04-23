let slider = document.querySelector(".Cont_cardSliders");
let contSlider = document.querySelectorAll(".card_sliderProm"); // el length de este array esta mal debe ser 4 y carga solo un dato
let width = contSlider[0].clientWidth;
let i = 1;
let interval = 4000;

window.addEventListener("resize", function(){
    width = contSlider[0].clientWidth
});

setInterval(function(){
    AnimateSlider();
},interval);

function AnimateSlider() { 
    slider.style.transform = "translate("+(-width*i)+"px)";
    slider.style.transition = "transform 1s";
    i++;

    if(i==contSlider.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px )";
            slider.style.transition = "transform 0s";
            i=1;
        },2000)
    }
}
