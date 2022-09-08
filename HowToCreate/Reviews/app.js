const reviews = [
    {
        id: 1,
        name: "Cat",
        job: "Full Stack developer",
        img: "images/img1.jpg",
        text: "Hi! I am Caroline. This playlist has helped me alot in improving my CSS, HTML, Javascript and Python skils. I would highly recommend all the beginners to go through it."
    },
    {
        id: 2,
        name: "Dog",
        job: "Frontend Engineer",
        img: "images/img2.jpg",
        text: "Hi! I am Sristy. This playlist has helped me alot in improving my CSS, HTML and Javascript skils. I would highly recommend all the beginners to go through it."
    },
    {
        id: 3,
        name: "Mouse",
        job: "frontend engineer",
        img: "images/img3.jpg",
        text: "Hi! I am Lucas. This playlist has helped me alot in improving my CSS, HTML and Javascript skils. I would highly recommend all the beginners to go through it."
    },
    {
        id: 4,
        name: "Parrot",
        job: "back end developer",
        img: "images/img4.jpg",
        text: "Hi! I am Nills. This playlist has helped me alot in improving my MS SQL skils. I would highly recommend all the beginners to go through it."
    },
    {
        id: 5,
        name: "Panda",
        job: "frontend engineer",
        img: "images/img5.jpg",
        text: "Hi! I am Kim. This playlist has helped me alot in improving my CSS, HTML and Javascript skils. I would highly recommend all the beginners to go through it."
    },
];

const personImg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
    display();
})

function display(){
    const item = reviews[currentItem];
    personImg.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    display();
})

preBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    display();
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()* reviews.length);
    console.log(currentItem)
    display();
});
