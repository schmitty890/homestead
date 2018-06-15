$("#post-dues-form").on("submit", function (event) {
  var newDues = {};
  event.preventDefault();
  if ($.trim($("#dues").val()) === "") {
    alert('you did not fill out dues');
  }
  else {
    newDues = {
      dues: $("#dues").val().trim()
    }
    var updateEmail = $('#duesEmail').val().trim()

    $.ajax("/api/postdues/"+updateEmail, {
      type: "PUT",
      data: newDues
    }).then(
      function() {
        location.reload();
      }
    ); 
  };
});