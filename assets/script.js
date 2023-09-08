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


let taches = [];

function addTache(id) {
    let title = document.getElementById("").value;
    let description = document.getElementById("").value;

    let task = {
        title: null,
        description: "",
        day: 0,
        status: true,
    };

    task.title = title;
    task.description = description;
    task.id = id;

    taches.push(task);
}
