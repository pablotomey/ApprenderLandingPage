function showNav() {
    console.log('Menu responsivo desplegado');
    var active = document.getElementById('responsive-nav');
    if(active.className === 'responsive-nav'){
        active.className += ' show-nav';
    }else{
        active.className = 'responsive-nav';
    }
}

// Animaciones realizadas con libreria ScrollReveal.js

ScrollReveal().reveal('.left-anim-description', {
    origin: 'left',
    distance: '100px',
    delay: 500,
});

ScrollReveal().reveal('.right-anim-description', {
    origin: 'right',
    distance: '100px',
    delay: 500,
});

ScrollReveal().reveal('.left-anim-interface', {
    origin: 'left',
    distance: '100px',
    delay: 600,
});

ScrollReveal().reveal('.right-anim-interface', {
    origin: 'right',
    distance: '100px',
    delay: 600,
});

ScrollReveal().reveal('.bottom-anim-team', {
    delay: 600,
    duration: 800,
    origin: 'bottom',
    distance: '100px'
});

ScrollReveal().reveal('.top-anim-profile', {
    delay: 800,
    duration: 600,
    origin: 'top',
    distance: '100px'
});

ScrollReveal().reveal('.bottom-anim-profile', {
    delay: 800,
    duration: 600,
    origin: 'bottom',
    distance: '100px'
});

// Peticion ajax para formulario de contacto...

function submitForm(){

    var userMessage = document.getElementById('user-message');
    var buttonMessage = document.getElementById('button-message');

    buttonMessage.innerHTML = "Enviando..";
    
    var datos = new FormData();

    datos.append('nombre', document.getElementById('nombre').value);
    datos.append('email', document.getElementById('email').value);
    datos.append('celular', document.getElementById('celular').value);
    datos.append('mensaje', document.getElementById('mensaje').value);
    
    var ajax = new XMLHttpRequest();
    ajax.open('POST','sendMail.php',true);

    ajax.onreadystatechange = function(){
        
        if(ajax.readyState == 4 && ajax.status == 200){
            
            if(ajax.responseText === 'enviado'){

                userMessage.style.display = "block";
                userMessage.innerHTML = "Gracias por contactarnos!!";
                buttonMessage.innerHTML = "Enviado !";

            }else{

                userMessage.style.display = "block";
                userMessage.innerHTML = "Error intentalo de nuevo!!";
                buttonMessage.innerHTML = "Enviar";

            }
        }
    }

    ajax.send(datos);
}