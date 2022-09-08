const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector('.nav-toggle');
const linksContainer =  document.querySelector('.links-container');
const links =  document.querySelector('.links');
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const header = document.getElementById('home');
const about = document.getElementById('about');
const services = document.getElementById('services');

navToggle.addEventListener('click', function(){
   // linksContainer.classList.toggle("show-links");
   const containerHeight = linksContainer.getBoundingClientRect().height;
   const linkHeight = links.getBoundingClientRect().height;

   if(containerHeight === 0){
       linksContainer.style.height = `${linkHeight}px`;
   }
   else{
        linksContainer.style.height = 0;
   }
});


window.addEventListener('scroll', function(){
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    
    if(scrollHeight > navHeight){
        navBar.classList.add("fixed-nav");
    }
    else if(scrollHeight <= navHeight){
        navBar.classList.remove("fixed-nav");
    }
    const reqHeight = header.getBoundingClientRect().height + about.getBoundingClientRect().height ;
    if(scrollHeight > reqHeight){
        
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
})



