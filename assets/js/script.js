function page4animation(){const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//hover img script

var elemC = document.querySelector(".elem-container");
var fixeimg = document.querySelector(".fixed-img");

elemC.addEventListener("mouseenter",function(){
    fixeimg.style.display = "block";
})

elemC.addEventListener("mouseleave",function(){
    fixeimg.style.display = "none";
})



var elems = document.querySelectorAll(".ele");

// console.log(elems);
// its better than give separete using loop and use like this


elems.forEach(function(Elements){

    Elements.addEventListener("mouseenter",function(){
        var immg = Elements.getAttribute("data-img");
        fixeimg.style.backgroundImage = `url(${immg})`;
    })

})}

// js for swiper

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 50,
        centeredSlides: true,
      });
}

// responsive  navigation

function menuAnimation(){var flag = 0;
var menu = document.querySelector(".menu");
var logo = document.querySelector(".logo");
var full = document.querySelector(".full-scr");
menu.addEventListener("click", function(){
    
    
    if (flag == 0) {
        
        full.style.top = "0%";
        logo.style.opacity = "0";
        flag = 1
        
    }
    else{

        full.style.top = "-100%";
        logo.style.opacity = "1";
        flag = 0;
        
    }

})}

// loader
function loadd(){
    var loader = document.querySelector(".loader");
setTimeout(function(){
    loader.style.top = "-100%"
}, 3000);
}

swiperAnimation();
page4animation();
menuAnimation();
loadd();
