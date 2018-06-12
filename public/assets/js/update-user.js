$("#updateUserNameForm").on("submit", function (event) {
  event.preventDefault();
  if ($.trim($("#updateUserName").val()) === "") {
    alert('you did not fill out a new user name');
  }
  else {
    var updatedName = $("#updateUserName").val().trim();
    var updateID = $("#updateUserName").data("id")
    console.log(updatedName)
    console.log(updateID)
    $.ajax("/api/users/"+updateID, {
      type: "PUT",
      data: updatedName
    }).then(
      function() {
        location.reload();
      }
    ); 
  };
});

$("#updateEmailForm").on("submit", function (event) {
  event.preventDefault();
  if ($.trim($("#updateUserEmail").val()) === "") {
    alert('you did not fill out a new email');
  }
  else {
    var updatedEmail = $("#updateUserEmail").val().trim();
    var updateID = $("#updateUserEmail").data("id")
    console.log(updatedEmail)
    console.log(updateID)
    $.ajax("/api/users/"+updateID, {
      type: "PUT",
      data: updatedEmail
    }).then(
      function() {
        location.reload();
      }
    ); 
  };
});

$("#updateUserDescription").on("submit", function (event) {
  event.preventDefault();
  if ($.trim($("#updateDescription").val()) === "") {
    alert('you did not fill out a new description');
  }
  else {
    var updatedDescription = $("#updateDescription").val().trim();
    var updateID = $("#updateUserDescription").data("id")
    console.log(updatedDescription)
    console.log(updateID)
    $.ajax("/api/users/"+updateID, {
      type: "PUT",
      data: updatedDescription
    }).then(
      function() {
        location.reload();
      }
    ); 
  };
});