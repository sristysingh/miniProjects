const searchBox = document.getElementById('searchBox'),
searchBtn = document.getElementById('searchBtn'),
list = document.getElementById('list');

searchBox.addEventListener('keyup', searchBoxFunc);
//searchBtn.addEventListener('click', searchBtnFunc);

function searchBoxFunc(){
    var searchUC = searchBox.value.toUpperCase();
  
    var y = list.querySelectorAll('.item');
    
    for (var i=0; i< y.length; i++){
        var itemUC = y[i].innerHTML.toLocaleUpperCase();
        if(itemUC.indexOf(searchUC) > -1){
            y[i].style.display = '';
        }
        else{
            y[i].style.display = 'none';
        }
    }

}

searchBoxFunc();