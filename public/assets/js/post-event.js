/**
 * [PostEvent captures values from the form on /postevent]
 * steps
 * 1. on submit of the postevent collect values from form
 * 2. pass values of form to ajax call to the backend api, /api/events
 */
var PostEvent = function(){
  var formValues = {};

  function gatherFormElements() {
    formValues = {
      title: $('#title').val().trim(),
      date: $('#date').val().trim(),
      description: $('#details').val().trim()
    }
    if (formValues.title === '' || formValues.date === '') {
      alert('fill out ALL required forms.');
    } else {
      passToBackend(formValues);
    }
  }

  function passToBackend(formValues) {
    console.log(formValues);
    $.ajax('/api/events', {
      type: 'POST',
      data: formValues
    }).then(
      function() {
        location.reload();
      }
    );
  }

  function onSubmit() {
    $(document).on('submit', '#post-event-form', function(e) {
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

PostEvent.init();
