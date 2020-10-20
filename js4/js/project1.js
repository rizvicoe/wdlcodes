let button = document.querySelector("#add-btn");

let textbox = document.getElementById("add-todo");

console.log(textbox.getAttribute('value'));

button.addEventListener('click', function(e){
    e.preventDefault();

    let data = textbox.value;
    if(data==''){
        alert("Cannot be empty");
        return;
    }
    textbox.value = '';
    let table = document.querySelector("table tbody");

    
    table.innerHTML += `<tr>
                            <td><input type="checkbox" class="todo-check" name="" id=""></td>    
                            <td>${data}</td>    
                            <td>Pending</td>
                        </tr>`;
    
    showTodoStatus();
});

let tbody = document.querySelector("tbody");


tbody.addEventListener("click", function(e){

    
    if(e.target.nodeName=='INPUT'){
        if(e.target.checked== true){
            let tr = e.target.parentNode.parentNode;
            tr.classList.add("complete");
            tr.lastElementChild.innerHTML = 'Complete';
        }else{
            let tr = e.target.parentNode.parentNode;
            tr.classList.remove("complete");
            tr.lastElementChild.innerHTML = 'Pending';
        }
        showTodoStatus();
    }
    
});

tbody.addEventListener("dblclick", function(e){

    
    if(e.target.nodeName=='TD'){
        let tr = e.target.parentNode;
        tr.remove();
        showTodoStatus();
    }
    
});


function showTodoStatus(){
    let complete = 0;
    let total = 0;

    let checkboxes = document.querySelectorAll(".todo-check");

    for(let checkbox of checkboxes){
        total++;
        if(checkbox.checked){
            complete++;
        }
    }

    let status = document.getElementById("todo-summary");
    //status.innerHTML = total+" Todo's Total, "+ complete +" Complete & "+ (total-complete) +" Pending";
    status.innerHTML = `${total} Todo's Total, ${complete} Complete & ${total-complete} Pending`;
}

showTodoStatus();




