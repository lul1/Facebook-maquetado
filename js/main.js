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
