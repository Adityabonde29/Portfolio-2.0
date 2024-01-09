const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//Projects//

var elemcontainer = document.querySelector("#elemcontainer")
var fixedimage = document.querySelector("#fixedimage")
elemcontainer.addEventListener("mouseenter",function(){
    fixedimage.style.display = "block"
})

elemcontainer.addEventListener("mouseleave",function(){
    fixedimage.style.display = "none"
})

//project 1
var elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter" , function(){
    var img = elem1.getAttribute("data-image")
    fixedimage.style.backgroundImage = `url(${img})`
})

//project 2
var elem2 = document.querySelector("#elem2")
elem2.addEventListener("mouseenter" , function(){
    var img = elem2.getAttribute("data-image")
    fixedimage.style.backgroundImage = `url(${img})`
})

//project 3
var elem3 = document.querySelector("#elem3")
elem3.addEventListener("mouseenter" , function(){
    var img = elem3.getAttribute("data-image")
    fixedimage.style.backgroundImage = `url(${img})`
})

//project 4
var elem4 = document.querySelector("#elem4")
elem4.addEventListener("mouseenter" , function(){
    var img = elem4.getAttribute("data-image")
    fixedimage.style.backgroundImage = `url(${img})`
})

//project 5
var elem5 = document.querySelector("#elem5")
elem5.addEventListener("mouseenter" , function(){
    var img = elem5.getAttribute("data-image")
    fixedimage.style.backgroundImage = `url(${img})`
})

//swiper js 
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 30,
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    });

//loader

var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
} ,3000)