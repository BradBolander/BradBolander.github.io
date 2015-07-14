$(document).ready(function() {

  console.log("All resources are loaded");
  $('.loading').hide();
  $('.success').hide();
  $('.error').hide();

  $('#button1').click(function(){
    $('html, body').animate({
        scrollTop: $( $('a').attr('href') ).offset().top
    }, 500);
    return false;
  });

  $('.intro').mousedown(function() {
    $('.intro').slideUp();
    console.log('intro clicked');
  });

  $(window).scroll(function() {
    $('.intro').slideUp();
    console.log('intro scrolled');
  });

  $('#form_send').on('click', function() {
    var formdata = app.createFormObject();
    console.log('clicked from submit...');
    app.sendEmail(formdata);
  });
});

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  retJson.request = $('#user_request').val();
  retJson.user_number = $('#user_number').val();
  retJson.user_location = $('#user_location').val();
  console.log(retJson);

  return retJson;

}

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
