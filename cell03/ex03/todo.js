const COOKIE_NAME = 'ft_list';
const COOKIE_OPTIONS = { expires: 1 };


newBTN = document.getElementById('BTN');
todoListDiv = document.getElementById('ft_list');

getTodoList();

newBTN.addEventListener('click', addTodo);

function addTodo() { // add to cookie
    let todo = prompt('Enter a new todo:');
    if (todo != null && todo != '') {
        let todoDiv = document.createElement('div');
        todoDiv.innerHTML = todo;
        
        //if cookie name exists
        if(document.cookie.indexOf(COOKIE_NAME) != -1) {
            //get cookie value
            let value = document.cookie.split('=')[1];
            console.log(value);
            listValue = value.split(',');
            listValue.push(todo);
            location.reload();
            //update cookie
            document.cookie = COOKIE_NAME + '=' + listValue + '; ' + COOKIE_OPTIONS;
        }
        else{
           //create cookie
            listValue = [];
            listValue.push(todo);
            document.cookie = COOKIE_NAME + '=' + listValue + '; ' + COOKIE_OPTIONS;
            location.reload();
            console.log('cookie created');
        
        }

    }
}

function removeTodo(todoName) { // remove from cookie
    if (confirm('Are you sure you want to delete "' + todoName + '"?')) {
        //get cookie value
        let value = document.cookie.split('=')[1];
        listValue = value.split(',');
        //remove todo
        for (let i = 0; i < listValue.length; i++) {
            if (listValue[i] == todoName) {
                listValue.splice(i, 1);
                break;
            }
        }
        //update cookie
        document.cookie = COOKIE_NAME + '=' + listValue + '; ' + COOKIE_OPTIONS;
        location.reload();
    }
}

function getTodoList() { // get from cookie
    if(document.cookie.indexOf(COOKIE_NAME) != -1) {
        let value = document.cookie.split('=')[1];
        listValue = value.split(',');
        for (let i = 0; i <=listValue.length - 1 ; i++) {
            let todoDiv = document.createElement('div');
            todoDiv.id = listValue[i];
            todoDiv.className = 'todoDiv';
            todoDiv.innerHTML = listValue[i];
            todoDiv.setAttribute('onclick', 'removeTodo("' + listValue[i] + '")');
            todoListDiv.insertBefore(todoDiv, todoListDiv.firstChild);
        }
    }
    else{
        console.log('cookie not found');
    }
}

