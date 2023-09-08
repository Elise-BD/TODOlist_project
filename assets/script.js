let taches = [];
generateLi();
function addTache(id) {
    let title = document.getElementById("title").value;
    let description = document.getElementById("").value;

    let task = {
        title: null,
        description: "",
        day: 0,
        status: true,
    };

    task.title = title;
    task.description = description;
    task.day = id;

    taches.push(task);
}

function generateLi() {
    let el, a;
    for( var _i = 1; _i <= 31; _i += 1 ){

        el = document.createElement("li");
        a = document.createElement("a");
        a.title = _i;
        a.id = _i;
        a.innerText = _i;
        a.setAttribute("data-value", `${_i}`);

        if( _i === 12 ){ a.classList.add("selected"); }

        switch( _i ){
            case 8:
            case 10:
            case 27:
                a.classList.add("event");
                break;
        }

        el.append(a);

        document.getElementsByClassName("days").item(0).append(el);
    }
}

// Get all the date elements with class "event"
var dateElements = document.querySelectorAll('.days a');
// Add a click event to each date element
dateElements.forEach(function (dateElement) {
    dateElement.addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Remove the "selected" class from the previously selected date
        var selectedDate = document.querySelector('.days a.selected');
        if (selectedDate) {
            selectedDate.classList.remove('selected');

            // Check if the previously selected date had both "event" and "selected" classes
            if (selectedDate.classList.contains('event')) {
                selectedDate.style.color = '#F48989'; // Change font color back to #F48989 for selected events
            }
        }

        // Add the "selected" class to the clicked date
        dateElement.classList.add('selected');

        // Check if the clicked date has both "event" and "selected" classes
        if (dateElement.classList.contains('event')) {
            dateElement.style.color = 'white'; // Change font color to white for selected events
        }
    });
});