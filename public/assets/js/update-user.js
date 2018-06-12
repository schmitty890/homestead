$("#updateUserNameForm").on("submit", function (event) {
  var newName = {};
  event.preventDefault();
  if ($.trim($("#updateUserName").val()) === "") {
    alert('you did not fill out a new user name');
  }
  else {
    newName = {
      name: $("#updateUserName").val().trim()
    }        
    var updateID = $("#updateNameBtn").data("id")
    $.ajax("/api/users/"+updateID, {
      type: "PUT",
      data: newName
    }).then(
      function() {
        location.reload();
      }
    ); 
  };
});

$("#updateEmailForm").on("submit", function (event) {
  var newEmail = {};
  event.preventDefault();
  if ($.trim($("#updateUserEmail").val()) === "") {
    alert('you did not fill out a new email');
  }
  else {
    newEmail = {
      email: $("#updateUserEmail").val().trim()
    }    
    var updateID = $("#updateEmailBtn").data("id")
    $.ajax("/api/users/"+updateID, {
      type: "PUT",
      data: newEmail
    }).then(
      function() {
        location.reload();
      }
    ); 
  };
});

$("#updateUserDescription").on("submit", function (event) {
  var newDescription = {};
  event.preventDefault();
  if ($.trim($("#updateDescription").val()) === "") {
    alert('you did not fill out a new description');
  }
  else {
    newDescription = {
      about: $("#updateDescription").val().trim()
    }
    var updateID = $("#updateDescriptionBtn").data("id")
    console.log(newDescription)
    console.log(updateID)
    $.ajax("/api/users/"+updateID, {
      type: "PUT",
      data: newDescription
    }).then(
      function() {
        location.reload();
      }
    ); 
  };
});
