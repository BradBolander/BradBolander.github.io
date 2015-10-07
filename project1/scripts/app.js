$(document).ready(function() {

  //Startup jQuery
  console.log("All resources are loaded");
  $('.intro').hide();
  $('.intro').fadeIn(3000);
  $('.loading').hide();
  $('.success').hide();
  $('.error').hide();



  //Scroll page to signup form on button click
  $('#button1').click(function(){
    $('html, body').animate({
        scrollTop: $( $('a').attr('href') ).offset().top
    }, 800);
    return false;
  });

  //Into scroll/click logic
  $('.intro').mousedown(function() {
    $('.intro').slideUp(800);

});

  app.hasScrolled = 0;

  $(window).scroll(function() {

    if (app.hasScrolled >= 1) {
      $('.intro').slideUp(800);
    }
    app.hasScrolled = app.hasScrolled + 1;

    console.log('intro scrolled');
  });

  //Signup form send button
  $('#form_send').on('click', function() {
    var formdata = app.createFormObject();
    console.log('clicked from submit...');
    app.sendEmail(formdata);
  });
});


//Get form data
var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  retJson.userAddress = $('#user_address').val();
  retJson.userCity = $('#user_city').val();
  retJson.userState = $('#user_state').val();
  retJson.userPhone = $('#user_phone').val();
  retJson.userZip = $('#user_zip').val();
  console.log(retJson);
  return retJson;
}

//Send form data
app.sendEmail = function(emailData) {
  // Display loading info...
  $('.loading').slideDown(); //.show()
  // hide old messages... because this is a new request
  $('.success').hide();
  $('.error').hide();
  // ajax argument
  var ajaxData = {
    url: 'http://imperialholonet.herokuapp.com/api/mail',
    type: 'POST',
    data: emailData,
    success: function(data) {
      console.log(data);
      $('.loading').slideUp(); //hide()
      $('.success').show();
    },
    error: function(err) {
      console.log(err);
      $('.loading').slideUp();
      $('.error').show();
    }
  };
  $.ajax(ajaxData);
}
