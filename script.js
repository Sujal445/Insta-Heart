let img = document.querySelector("img");
let heart = document.querySelector("i");
img.addEventListener("dblclick",function(){
    heart.style.opacity = 0.8;
    heart.style.transform = "translate(-50% , -50%) scale(1)";
    setTimeout(function(){
        heart.style.opacity = 0;
    } , 2300)
    setTimeout(function(){
        heart.style.transform = "translate(-50% , -50%) scale(0)";
    } , 3500)
})

