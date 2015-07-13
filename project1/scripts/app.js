$(document).ready(function() {

  console.log("All resources are loaded");

  $('#form_send').on('click', function() {
    var formdata = app.createFormObject();
    console.log('clicked');
  });
//   $.ajax({
// 	url: 'http://www.omdbapi.com/?t=Star+Wars&y=&plot=short&r=json',
// 	type: "GET",
// 	dataType: 'json',
// 	success: function(data) {
// 		$('body').append(data.Title + " was released in " + data.Year + "<hr><br>");
// 	}
//
// });
});

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.user_Name = $('#user_name').val();
  retJson.user_email = $('#user_email').val();
  retJson.user_request = $('#user_request').val();
  retJson.user_number = $('#user_number').val();
  retJson.user_location = $('#user_location').val();
  console.log(retJson);

  return retJson;

}
