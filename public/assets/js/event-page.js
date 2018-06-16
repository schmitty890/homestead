var EventPage = function(){

    var newEvent = {};

    function gatherFormElements() {
        
        newEvent = {
            author_id: $('#post-new-event').data("id"),
            title: $('#newEventTitle').val().trim(),
            description: $('#newEventDescription').val().trim(),
            category: $('#newEventCategory').val().trim(),
            location: $('#newEventLocation').val().trim(),
            date: $('#newEventStartDate').val(),
            endDate: $('#newEventEndDate').val(),
            allDay: $('#newEventAllDay').prop('checked')
        }
        console.log(newEvent.date);
        passEventToBackend(newEvent);

    }

    function eventListners() {
        $("#newEventAllDay").on('ifChanged', function() {
            if(!$(this)[0].checked) {
                $('#newEventEndDate').show();
            } else {
                $('#newEventEndDate').hide();
            }
        })
    }

    function passEventToBackend(newEvent) {
        
        $.ajax('/api/events', {
            type: 'POST',
            data: newEvent
        }).then( function() {
            // location.reload();
        });
    }

    function onSubmit() {
        $(document).on('submit', '#newEventForm', function(event) {
            event.preventDefault();
            gatherFormElements();
        })
    }
    
    function init() {
        eventListners();
        onSubmit();
    }

    return {
        init: init
    }

}();

EventPage.init();