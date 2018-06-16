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
      author_id: $('#post-new-event').data("id"),
      title: $('#newEventTitle').val().trim(),
      description: $('#newEventDescription').val().trim(),
      category: $('#newEventCategory').val().trim(),
      location: $('#newEventLocation').val().trim(),
      date: $('#newEventStartDate').val(),
      allDay: $('#newEventAllDay').prop('checked')
    }
    if(!formValues.allDay) {
      formValues.endDate = $('#newEventEndDate').val()
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
