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
