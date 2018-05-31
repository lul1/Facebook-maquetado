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
