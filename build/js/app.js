function showNav(){console.log("Menu responsivo desplegado");var e=document.getElementById("responsive-nav");"responsive-nav"===e.className?e.className+=" show-nav":e.className="responsive-nav"}function submitForm(){var e=document.getElementById("user-message"),n=document.getElementById("button-message"),a=new FormData;a.append("nombre",document.getElementById("nombre").value),a.append("email",document.getElementById("email").value),a.append("celular",document.getElementById("celular").value),a.append("mensaje",document.getElementById("mensaje").value);var t=new XMLHttpRequest;t.open("POST","sendMail.php",!0),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&(n.innerHTML="Enviando..","enviado"===t.responseText?(e.style.display="block",e.innerHTML="Gracias por contactarnos!!",n.innerHTML="Enviado !"):e.innerHTML="Error intentalo de nuevo!!")},t.send(a)}ScrollReveal().reveal(".left-anim-description",{origin:"left",distance:"100px",delay:500}),ScrollReveal().reveal(".right-anim-description",{origin:"right",distance:"100px",delay:500}),ScrollReveal().reveal(".left-anim-interface",{origin:"left",distance:"100px",delay:600}),ScrollReveal().reveal(".right-anim-interface",{origin:"right",distance:"100px",delay:600}),ScrollReveal().reveal(".bottom-anim-team",{delay:600,duration:800,origin:"bottom",distance:"100px"}),ScrollReveal().reveal(".top-anim-profile",{delay:800,duration:600,origin:"top",distance:"100px"}),ScrollReveal().reveal(".bottom-anim-profile",{delay:800,duration:600,origin:"bottom",distance:"100px"});