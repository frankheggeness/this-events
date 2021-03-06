//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var home = document.getElementsByClassName('navi')

for (var i=0; i<home.length; i++){
    home[i].addEventListener('click', showStuff)
}

function showStuff(){
    var getInner = this.querySelector('.inner');
    if(getInner.style.display === 'block'){
        getInner.style.display = 'none';
    }else{
        getInner.style.display = 'block';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameRest = document.getElementsByClassName('name');

for(var i=0; i<nameRest.length; i++){
    nameRest[i].addEventListener('click', dropDown)
}

function dropDown(){
    var getMenu = this.querySelector('.menu');
    if(getMenu.style.display === 'block'){
        getMenu.style.display = 'none';
    }else{
        getMenu.style.display = 'block';
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var findThumb = document.getElementsByClassName('thumb');

for(var i=0; i<findThumb.length; i++){
    findThumb[i].addEventListener('click', addThumb)
    var newThumb = document.createElement('div');
    newThumb.className = 'counter';
    newThumb.innerHTML = 0;
    findThumb[i].appendChild(newThumb);
}
function addThumb(){
    var findCounter = this.querySelector('.counter')
    findCounter.innerHTML++
}

