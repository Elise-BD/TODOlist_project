let taches = [];
let tasksForTheDay= [];

let predifinedTask8= {
    title: "Update GIT",
        description: "A git update",
        day: 8,
        status: true,
};
let predifinedTask10= {
    title: "Rollback GIT",
    description: "A git rollback",
    day: 10,
    status: true,
};
let predifinedTask27= {
    title: "Rollback GIT",
    description: "A git rollback",
    day: 27,
    status: true,
};

taches.push(predifinedTask8);
taches.push(predifinedTask10);
taches.push(predifinedTask27);

generateLi();
let taskIdCounter = 0; // Add this line to create unique task IDs

function addLi(id) {
    let title = document.getElementById("title").value;

    if (title) {
        // Generate a unique task ID
        taskIdCounter++;

        let ul = document.querySelector(".noteList");
        let li = document.createElement("li");
        li.dataset.taskId = taskIdCounter; // Assign a unique task ID
        li.innerHTML = title + '<a href="#" title="Remove note" class="removeNote animate" onclick="removeTask(' + taskIdCounter + ')">x</a>';
        ul.appendChild(li);

        // Clear the input field after adding the task
        document.getElementById("title").value = "";
    }
}

function addTache(id) {
    let title = document.getElementById("title").value;
    //let description = document.getElementById("").value;

    let task = {
        title: null,
        //description: "",
        day: 0,
        status: true,
    };

    task.title = title;
    //task.description = description;
    task.day = id;

    taches.push(task);
    addLi(id);
}

function removeTache(id) {
    for (let i = 0; i < taches.length; i++) {
        if (taches[i].day === id) {
            taches.splice(i, 1);
            // On décrémente "i" pour compenser le décalage créé par "splice"
            i--;
        }
    }
}

// Add a function to remove a task by its unique task ID
function removeTask(taskId) {
    let taskToRemove = document.querySelector('li[data-task-id="' + taskId + '"]');
    if (taskToRemove) {
        taskToRemove.remove();
    }
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
        a.addEventListener("click",changeH1);
        a.addEventListener("click", changePlusButton);

        if( _i === 8 ){ a.classList.add("selected"); }

        switch( _i ){
            case 9:
            case 10:
            case 27:
                a.classList.add("event");
                break;
        }

        el.append(a);

        document.getElementsByClassName("days").item(0).append(el);
    }
}

function changeH1(id) {
    let h = document.querySelector("h1");
    h.textContent = id.target.id + " septembre";
    getTaskByDay(id);
}
function changePlusButton(id) {
    let add = document.getElementById("add");
    add.addEventListener("click", function() {
        addTache(parseInt(id.target.id));
    });
}

function getTaskByDay(id)  {
    let ul = document.getElementsByClassName("noteList").item(0);
    ul.innerHTML="";
    for (var i = 0; i < taches.length; i++) {
        if(taches[i].day == id.target.id){
            tasksForTheDay.push(taches[i]);

            let lihtml = "<li>" + taches[i].title +" </li>"
            ul.innerHTML=lihtml;
        }
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
                selectedDate.style.color = '#D35400'; // Change font color back to #F48989 for selected events
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

const buttons = document.querySelectorAll('.color-button');
const colors = ['#D35400', '#3498DB', '#27AE60', '#E74C3C', '#9B59B6'];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const color = colors[index];

        // Change the color of .calendar .days li .event elements
        document.querySelectorAll('.calendar .days li .event').forEach((element) => {
            element.style.color = color;
        });

        // Change the background color of .calendar .days li .selected elements
        document.querySelectorAll('.calendar .days li .selected').forEach((element) => {
            element.style.backgroundColor = color;
        });

        // Change the background color of .calendar .notes input
        document.querySelector('.calendar .notes input').style.backgroundColor = color;

        // Change the background color of .calendar .leftCol
        document.querySelector('.calendar .leftCol').style.backgroundColor = color;

        // Change the color of <a> elements that have the "event" class
        document.querySelectorAll('a.event').forEach((element) => {
            element.style.color = color;
        });
    });
});


