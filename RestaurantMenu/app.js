const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `I'm pancakes loaded with honey, almonds, nuts whatever cold-pressed`,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpg",
      desc: `Eat me in your dinner to reduce your hunger and increase your fats`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: "6.99",
      img: "./images/item-3.jpg",
      desc: `I'm a viral milkshake, either have me or die`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpg",
      desc: `I've come straight out of your mum's kitchen`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpg",
      desc: `I'm a tiny attacker full of health & goodness`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpg",
      desc: `I'm dark oreos dipped in creamy mil & ice cream topped with chocolate chips and vannilla sacuse`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpg",
      desc: `I dont know what I am, order me and eat`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpg",
      desc: `I'm yet another delicious food with fancy name`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpg",
      desc: `I taste good, begging you please choose me`,
    }
  ];

const sectionCenter = document.querySelector('.section-center');

const btnContainer =  document.querySelector('.btn-container');




window.addEventListener('DOMContentLoaded', function(){
    dispalyMenuItem(menu);
    displayMenuButton();
})



function dispalyMenuItem(menuItem){
    let displayMenu = menuItem.map(function(item){
        //return 'Hi Worlld';
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">Rs ${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`
      })
      displayMenu = displayMenu.join("");
      sectionCenter.innerHTML = displayMenu;
}

function displayMenuButton(){
  var categories = menu.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values;
  },['all'])
  const categoryBtn = categories.map(function(cate){
    return `<button class="filter-btn" type="button" data-id=${cate}>${cate}</button>`
  }).join("");
   //console.log(categoryBtn)
   btnContainer.innerHTML = categoryBtn; 
   //console.log(btnContainer)

  const filterBtn = document.querySelectorAll('.filter-btn');
  filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        var category = e.currentTarget.dataset.id;
        console.log(category)
        if(category === 'all'){
          dispalyMenuItem(menu);
        }else{
          const filteredItem = menu.filter(function(singleItem){
            if(singleItem.category === category){
              return singleItem;
            }
          })
          console.log(filteredItem)
          dispalyMenuItem(filteredItem)
        }      
    })
 })
}