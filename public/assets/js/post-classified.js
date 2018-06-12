// function prefixMaker() {
//   //let prefix = $("#category").val();
//   $("#category").attr("data-prefix", $("#category").val())
// }

// $("#postClassy").on("submit", function (event) {
//   event.preventDefault();
//   var prefixboi = $("#category").data("prefix");

//   if ($.trim($("#title").val()) === "") {
//     alert('you did not fill out title');
//     return false;
//   }
//   if ($.trim($("#price").val()) === "") {
//     alert('you did not fill out price');
//     return false;
//   }
//   if ($.trim($("#name").val()) === "") {
//     alert('you did not fill out name');
//     return false;
//   }
//   if ($.trim($("#email").val()) === "") {
//     alert('you did not fill out email');
//     return false;
//   }
//   if ($.trim($("#phone").val()) === "") {
//     alert('you did not fill out a phone');
//     return false;
//   }
//   if ($.trim($("#category").val()) === "") {
//     alert('you did not select a category');
//     return false;
//   }
//   if ($.trim($("#"+prefixboi+"Condition").val()) === "") {
//     alert('you did not fill out a sub category');
//     return false;
//   }

//   if ($.trim($("#"+prefixboi+"Status").val()) === "") {
//     alert('you did not fill out status');
//     return false;
//   }
//   else {
//     var userId = $("#addClassBtn").data("id");
//     var userName = $("#addClassBtn").data("username");
//     console.log(userName)
//     var newClassified = {
//       author_id: userId,
//       username: userName,
//       name: $("#name").val().trim(),
//       email: $("#email").val().trim(),
//       phone: $("#phone").val().trim(),
//       price: $("#price").val().trim(),
//       title: $("#title").val().trim(),
//       details: $("#details").val().trim(),
//       category: $("#category").val().trim(),
//       condition: $("#"+prefixboi+"Condition").val().trim(),
//       status: $("#"+prefixboi+"Status").val().trim()
//     };
//     $.ajax("/api/classifieds", {
//       type: "POST",
//       data: newClassified
//     }).then(
//       function() {
//         location.reload();
//       }
//     );
//   };
// });


/**
 * [PostClassified captures values from the form on /postclassified]
 * steps
 * 1. on submit of the postevent collect values from form
 * 2. pass values of form to ajax call to the backend api, /api/classifieds
 */
var PostClassified = function(){
  var formValues = {};
  var $form = $('#post-classified-form'); // we cache this jquery selector, and then reference it below as a variable. this is good practice.

  // when the category on the post-classified-form changes, grab the val of the category, and reassign it to data-prefix
  $form.on('change', '.change-tab', function() {
    var dataPrefix = $form.find('#category').val();
    $form.find('#category').attr('data-prefix', dataPrefix);
  });

  function gatherFormElements() {
    var userId = $("#addClassBtn").data("id");
    var userName = $("#addClassBtn").data("username");
    formValues = {
      author_id: userId,
      username: userName,
      name: $form.find('#name').val().trim(),
      email: $form.find('#email').val().trim(),
      phone: $form.find('#phone').val().trim(),
      price: $form.find('#price').val().trim(),
      title: $form.find('#title').val().trim(),
      details: $form.find('#details').val().trim(),
      category: $form.find('#category').val().trim()
      // condition: $form.find('.status-selector .item').val().trim(),
      // status: $form.find('.status-selector .item').val().trim()
    }

    console.log(formValues);

    // if (formValues.title === '' || formValues.date === '') {
    //   alert('fill out ALL required forms.');
    // }
    passToBackend(formValues);
  }

  function passToBackend(formValues) {
    console.log(formValues);
    $.ajax('/api/classifieds', {
      type: 'POST',
      data: formValues
    }).then(
      function() {
        location.reload();
      }
    );
  }

  function onSubmit() {
    $(document).on('submit', '#post-classified-form', function(e) {
      e.preventDefault();
      gatherFormElements();
    });
  }

  function init() {
    onSubmit();
  }

  return {
    init: init
  }

}();

PostClassified.init();

