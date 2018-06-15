$(document).ready(function($) {

    // page is now ready, initialize the calendar...
    $.ajax("/api/events", {
        type: "get"
      }).then(
        function(eventData) {
            displayCalendar(eventData);
        }
      );

    function determineColor(cat) {
        switch(cat) {
            case("Social"):
                return "red";
            case("Sell"):
                return "green";
            case ("Fitness"):
                return "yellow";
            case ("Class"):
                return "orange";
            case ("Community"):
                return "purple";
            default:
                return "blue"; 
        }

    }
  
    function displayCalendar(eventData) {
        var eventList = [];
        eventData.forEach(function(event) {
            var newEvent = {
                title: event.title,
                textColor: 'white',
                color: determineColor(event.category),
                allDay: true

            };
            if(!event.allDay) {
                    newEvent.start = moment(event.date).format("YYYY-MM-DD hh:mm:ss");
                    newEvent.end = moment(event.endDate).format("YYYY-MM-DD hh:mm:ss");   
            } else {
                newEvent.start = moment(event.date).format("YYYY-MM-DD hh:mm:ss");
                newEvent.end = moment(event.endDate).format("YYYY-MM-DD hh:mm:ss"); 
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