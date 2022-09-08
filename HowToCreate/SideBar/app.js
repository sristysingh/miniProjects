const sidebarToggle =  document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function(){
    console.log(sidebar.classList)
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')
})