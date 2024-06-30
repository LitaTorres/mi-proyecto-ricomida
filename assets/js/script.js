
/* evento envío correo, selector por id */
$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente")
    })
});

$(document).ready(function(){
    $("#guardarFavoritos").click(function(){
        alert("Receta agregada a favoritos exitosamente")
    })
});

/* Cambio de color con dblclick selector por etiqueta */

$(document).ready(function(){
    $("h4").on('dblclick', function(){ /* selector en la etiqueta h4 se usa this para q se cambie solo de a 1*/
        $(this).css("color", "#dc3545");
    });
});

/* selector por clase*/
$(document).ready(function(){
    $(".card-title").click(function(){ // al hacer clic en los titulos
        $(".card-text").toggle(); //desaparece el contenido
    });
});



/* TOOLTIP JS */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* POP-OVER JS */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
