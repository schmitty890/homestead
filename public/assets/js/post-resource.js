/**
 * [PostResource captures values from the form on /postevent]
 * steps
 * 1. on submit of the postevent collect values from form
 * 2. pass values of form to ajax call to the backend api, /api/resource
 */
var PostResource = function () {

  $('#submit-category').selectize({
    sortField: 'text'
  });

  var formValues = {};

  function gatherFormElements() {
    formValues = {
      title: $('#title').val().trim(),
      date: $('#date').val().trim(),
      description: $('#details').val().trim()
    }
    if (formValues.title === '' || formValues.description === '') {
      alert('fill out ALL required forms.');
    }
    passToBackend(formValues);
  }

  function passToBackend(formValues) {
    console.log(formValues);
    $.ajax('/api/resources', {
      type: 'POST',
      data: formValues
    }).then(
      function () {
        //redirect to resource page?
        location.reload();
      }
    );
  }

  function onSubmit() {
    $(document).on('submit', '#post-resource-form', function (e) {
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

PostResource.init();
