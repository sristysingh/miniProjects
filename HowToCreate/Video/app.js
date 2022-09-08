const switchBtn =  document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchBtn.addEventListener('click', function(){
    if(!switchBtn.classList.contains("slide")){
        switchBtn.classList.add("slide");
        video.pause();
    }
    else{
        switchBtn.classList.remove("slide");
        video.play();
    }
})

const preLoader =  document.querySelector('.preloader');

window.addEventListener('load', function(){
    preLoader.classList.add('hide-preloader');
})