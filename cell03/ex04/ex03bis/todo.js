const COOKIE_NAME = "ft_list";
const COOKIE_OPTIONS = { expires: 1, path: "/" };

$(document).ready(function () {
    getTodoList();

    $("#BTN").on("click", function () {
        addTodo();
    });
});

// Base64 Encoding
function Base64Encode(str) {
    let bytes = new TextEncoder().encode(str);
    return base64js.fromByteArray(bytes);
}

// Base64 Decoding
function Base64Decode(str) {
    let bytes = base64js.toByteArray(str);
    return new TextDecoder().decode(bytes);
}

function addTodo() {
    let todo = encodeURIComponent(prompt("Enter a new todo:"));
    if (todo && todo.trim() !== "") {
        let listValue = $.cookie(COOKIE_NAME) ? Base64Decode($.cookie(COOKIE_NAME)).split(",") : [];
        listValue.push(todo);

        $.cookie(COOKIE_NAME, Base64Encode(listValue.join(",")), COOKIE_OPTIONS);
        location.reload();
    }
}

function removeTodo(todoName) {
    if (confirm('Are you sure you want to delete "' + todoName + '"?')) {
        
        let listValue = $.cookie(COOKIE_NAME) ? Base64Decode($.cookie(COOKIE_NAME)).split(",") : [];
        listValue = listValue.filter(item => item !== todoName);
        $.cookie(COOKIE_NAME, Base64Encode(listValue.join(",")), COOKIE_OPTIONS);
        location.reload();
    }
}

function getTodoList() {
    let cookieValue = $.cookie(COOKIE_NAME);
    let listValue = cookieValue ? Base64Decode(cookieValue).split(",") : [];

    if (listValue.length > 0) {
        listValue.forEach(todo => {
            let todoDiv = $("<div></div>")
                .addClass("todoDiv")
                .text(decodeURIComponent(todo))
                .on("click", function () {
                    removeTodo(todo);
                });
            $("#ft_list").prepend(todoDiv);
        });
    } else {
        console.log("No todos found.");
    }
}
