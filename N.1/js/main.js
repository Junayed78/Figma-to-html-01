//mixitup
var a_1 = $('#a_1');
var a_2 = $('#a_2');
var a_3 = $('#a_3');
var a_4 = $('#a_4');
var a_5 = $('#a_5');
var a_7 = $('#a_6');
var a_8 = $('#a_7');
var a_6 = $('#a_8');

function allmixe(){
  a_1.slideDown('1000');
  a_2.slideDown('1000');
  a_3.slideDown('1000');
  a_4.slideDown('1000');
  a_5.slideDown('1000');
  a_6.slideDown('1000');
  a_7.slideDown('1000');
  a_8.slideDown('1000');
}

$(document).ready(function(){
  $('#button1').click(function(){
    allmixe();
  });

  $('#button2').click(function(){
    allmixe();
    a_1.slideUp('1000');
    a_6.slideUp('1000');
  });
  $('#button3').click(function(){
    allmixe();
    a_3.slideUp('1000');
    a_4.slideUp('1000');
    a_5.slideUp('1000');
  });
  $('#button4').click(function(){
    allmixe();
    a_1.slideUp('1000');
    a_2.slideUp('1000');
    a_5.slideUp('1000');
    a_6.slideUp('1000');
  });
  $('#button5').click(function(){
    allmixe();
    a_3.slideUp('1000');
    a_4.slideUp('1000');
    a_7.slideUp('1000');
    a_8.slideUp('1000');
  });
});
//Silk Slider
$(document).ready(function() {
  $('.products').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
	{
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
            
  });
  $('.products_3').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
	{
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
            
  });
  $('.testimonial_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
	{
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
            
  });
});
// Show pass Js
function show(){
  var pswrd = document.getElementById('pswrd');
  var svg = document.querySelector('.fas');
  if (pswrd.type === "password"){
    pswrd.type = "text";
    svg.style.color = "#636270";
  }else{
    pswrd.type = "password";
    svg.style.color = "grey";
  }
}