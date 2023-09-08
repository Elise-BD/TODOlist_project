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