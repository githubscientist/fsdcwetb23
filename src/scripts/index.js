async function fetchNotes() {
    console.log('Fetching notes...');

    try {
        // call the api
        const response = await fetch('https://683bdc3428a0b0f2fdc593ef.mockapi.io/notes');
        const notes = await response.json();

        console.log(notes);
    } catch (error) {
        console.log(error.message);
    }
}

fetchNotes();