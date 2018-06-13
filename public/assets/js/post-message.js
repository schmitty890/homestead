var PostMessage = function(){
  var formValues = {};

  function gatherFormElements() {
    var userId = $("#post-resource-btn").data("id");
    var userName = $("#post-resource-btn").data("username");
    formValues = {
      author_id: userId,
      name: $('#contactName').val().trim(),
      email: $('#contactEmail').val().trim(),
      subject: $('#contactSubject').val().trim(),
      category: $('#contact-category-select').val().trim(),
      message: $('#contactMessage').val().trim(),
    }
    passToBackend(formValues);
  }

  function passToBackend(formValues) {
    $.ajax('/api/messages', {
      type: 'POST',
      data: formValues
    }).then(
      function() {
        location.reload();
      }
    );
  }

  function onSubmit() {
    $(document).on('submit', '#post-message-form', function(e) {
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

PostMessage.init();

