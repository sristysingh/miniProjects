

/*const btns = document.querySelectorAll('.question-btn');
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const target = e.currentTarget.parentElement.parentElement;
        target.classList.toggle('show-text');
    })
})*/

const question = document.querySelectorAll('.question');

question.forEach(function(que){
    const btn = que.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        question.forEach(function(que1){
            if(btn === que1.querySelector('.question-btn')){
                que.classList.toggle('show-text');
            }
            else{
                que1.classList.remove('show-text');
            }
        })
    })
})