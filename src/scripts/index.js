let todosButton = document.querySelector(".todosButton");

async function fetchTodos() {
    console.log('Fetching Todos...');
    try {
        const response = await fetch('https://683aa2ef43bb370a86733ba3.mockapi.io/todos');
        console.log('Fetched Todos...');

        try {
            const todos = await response.json();

            console.log(todos);
        } catch (error) {
            console.log(error.message);
        }
    } catch (error) {
        console.log(error.message);
    }
}

todosButton.addEventListener('click', fetchTodos);