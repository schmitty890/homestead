/**
 * [PostResource captures values from the form on /postevent]
 * steps
 * 1. on submit of the postevent collect values from form
 * 2. pass values of form to ajax call to the backend api, /api/resource
 */
var PostResource = function () {

  var formValues = {};

  function gatherFormElements() {

    formValues = {
      author_id: $('#post-resource').attr('data-id'),
      email: $('#post-resource').attr('data-email'),
      title: $('#title').val().trim(),
      description: $('#details').val().trim(),
      category: $('#resource-category-select').val()
    }
    if (formValues.title === '' || formValues.description === '') {
      alert('fill out ALL required forms.');
    }
    passToBackend(formValues);
  }

  function passToBackend(formValues) {
    // console.log("formValues", formValues);
    $.ajax('/api/resources', {
      type: 'POST',
      data: formValues
    }).then(
      function () {
        //redirect to resource page?
        //location.reload();
      }
    );
  }

  function onSubmit() {
    // $(document).on('submit', '#post-resource-form', function (e) {
    $(document).on('click', '#post-resource', function (e) {
      console.log("clicked", this);
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
