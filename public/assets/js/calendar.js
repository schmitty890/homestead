$(document).ready(function($) {

    // page is now ready, initialize the calendar...
    $.ajax("/api/events", {
        type: "get"
      }).then(
        function(eventData) {
            displayCalendar(eventData);
        }
      );
  
    function displayCalendar(eventData) {
        var eventList = [];
        eventData.forEach(function(event) {
            var newEvent = ({
                title: event.title,
                start: moment(event.date).format("YYYY-MM-DD"),
                allDay: true,
                textColor: 'white'
            })
            if(event.category === "Social") {
                newEvent.color = "red"
            } else if(event.category === "Sell") {
                newEvent.color = "green"
            } else {
                newEvent.color = "blue"
            }
            eventList.push(newEvent); 
        }) 

      $('#calendar').fullCalendar({
            themesystem: 'bootstrap4',
            header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,listWeek'
            },
            defaultView: 'month',
            defaultDate: moment(),
            navLinks: true, // can click day/week names to navigate views
            editable: false,
            eventLimit: true, // allow "more" link when too many events
            events: eventList,
            
        });
    }
  });