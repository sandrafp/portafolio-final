$(document).ready(function() {
	$("#element-to-animate").waypoint(function() {
    	$('#element-to-animate').addClass('fadeInDown');
  	},{ offset: '50%'});
       $(window).scroll(function(){
  	     var altura = $('#home').height();
  	      if ($(this).scrollTop() > altura) {
  	      	$('.navbar-default').addClass('nav-color-Two');
  	      }else {
  	      	$('.navbar-default').removeClass('nav-color-Two');
  	      };
  	   });
     $('.img-about-me').mouseenter(function() {
        $(this).attr("src","images/IMG_0507.png").css('height', '150');

     }).mouseleave(function(){
        $('.img-about-me').attr("src","images/Pasted image at 2016_07_14 04_49 PM.png");
     });
     

     
	
});