let todosButton = document.querySelector(".todosButton");

function fetchTodos() {
    console.log('Fetching Todos...');
    // try {
    //     console.log(fruits[0]); // Error Handling: Application breaks
    // } catch (error) {
    //     console.log(error.message);
    // }
    fetch('https://683aa2ef43bb370a86733ba3.mockapi.io/todos')
        .then((data) => {
            console.log('Fetched Todos...');
            return data.json();
        })
        .then((todos) => {
            console.log(todos);
        })
        .catch((error) => {
            console.log(error.message);
        })
}

todosButton.addEventListener('click', fetchTodos);