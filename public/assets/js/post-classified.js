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
      category: $form.find('#category').val().trim(),
      image: $form.find('#image').val().trim()
      // condition: $form.find('.status-selector .item').val().trim(),
      // status: $form.find('.status-selector .item').val().trim()
    }

    // console.log(formValues);

    if (formValues.name === '' || formValues.email === '' || formValues.price === '' || formValues.phone === '' || formValues.title === '') {
      alert('fill out ALL required forms.');
    } else {
      passToBackend(formValues);
    }
  }

  function passToBackend(formValues) {
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

