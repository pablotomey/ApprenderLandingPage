function showNav() {
    console.log('Menu responsivo desplegado');
    var active = document.getElementById('responsive-nav');
    if(active.className === 'responsive-nav'){
        active.className += ' show-nav';
    }else{
        active.className = 'responsive-nav';
    }
}