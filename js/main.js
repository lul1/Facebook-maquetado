$(window).on('scroll',function  () {
  if ($(window).scrollTop()) {
      $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black');

  }
});





var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
  $("#enviar").click(function(){
      var nombre = $("#nombre").val();
      var correo = $("#mail").val();
      var mensaje = $("#mensaje").val();
      var objeto = $("#objeto").val();


      if (nombre == "") {
        alert('We require a valid name');
        return false;
      }else {

        if (correo == "" || !expr.test(correo)) {
          alert('We require a valid Email');
          return false;
        }else {

          if (objeto == ""){
            alert('We require a Subjet');
            return false;
          }else {

            if (mensaje == "") {
            alert('Tell us you Message');
            return false;
          }
          }
        }
      }
  });
});



/* connect con facebook */


    $(document).ready(function(){
        $('#loginfacebook').click(function(){

            loginUsingFacebook();

        });
        $('#logoutfacebook').click(function(){

            logoutFacebook();

        });
    })

/*SCROLL MAGIC */


var controller = new ScrollMagic.Controller();

var Scene1Left = new ScrollMagic.Scene({
  triggerElement: '.lista1'
})
.setClassToggle('.lista1', 'show')
.addTo(controller);

var Scene2Left = new ScrollMagic.Scene({
  triggerElement: '.about_title'
})
.setClassToggle('.about_title', 'show')
.addTo(controller);


var Scene3Left = new ScrollMagic.Scene({
  triggerElement: '.scroll2'
})
.setClassToggle('.scroll2', 'show')
.addTo(controller);


var Scene4Right = new ScrollMagic.Scene({
  triggerElement: '.ourpeople'
})
.setClassToggle('.ourpeople', 'show')
.addTo(controller);

var Scene5Right = new ScrollMagic.Scene({
  triggerElement: '.lista_about'
})
.setClassToggle('.lista_about', 'show')
.addTo(controller);

var Scene6Left = new ScrollMagic.Scene({
  triggerElement: '.galeria_title'
})
.setClassToggle('.galeria_title', 'show')
.addTo(controller);


var Scene7Left = new ScrollMagic.Scene({
  triggerElement: '.galeria_div'
})
.setClassToggle('.galeria_div', 'show')
.addTo(controller);

var Scene8Right = new ScrollMagic.Scene({
  triggerElement: '.containerform'
})
.setClassToggle('.containerform', 'show')
.addTo(controller);


/* validacion sign up */
function validar() {

  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var contraseña = document.getElementById('contraseña').value;
  var ccontraseña = document.getElementById('confirmar').value;
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (username == "") {
    alert(" Escriba su nombre");
    return false;
  }

  if (email == "") {
    alert(" Escriba su correo");
    return false;
  }

  if (contraseña == "") {
    alert(" Escriba su contraseña");
    return false;
  }

  if (ccontraseña == "") {
    alert(" vuelva a escribir su contraseña");
    return false;
  }


  if (contraseña !== ccontraseña) {
    alert("La contraseña no coincide");
    return false;
  }

  if (!regex.test(email)) {
    alert("correo invalido");
    return false;
  }

}
function soloLetras(e){

    key=e.keycode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras="abcdefghijklmnñopqrstuvwxyz";

    especiales="8-37-38-46-164";

    teclado_especial=false;

    for (var i in especiales) {
      if (key==especiales[i]) {
        teclado_especial=true;
        break;
      }
    }

    if (letras.indexOf(teclado)==-1  && !teclado_especial) {

      return false;
    }
}
