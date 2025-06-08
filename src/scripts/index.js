let notes = [];
let notesDiv = document.querySelector('.notes');

async function fetchNotes() {

    try {
        // call the api
        const response = await fetch('https://683bdc3428a0b0f2fdc593ef.mockapi.io/notes');
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}

async function populate(notes) {
    // create an unordered list element (ul)
    const ul = document.createElement('ul');

    // loop over the notes array
    notes.forEach((note) => {
        // and for each of the notes object
        // create an li item
        const li = document.createElement('li');

        // create an anchor tag
        const a = document.createElement('a');

        // set the content of the anchor tag to note.title
        a.textContent = note.title;

        // set the href attribute of the anchor tag
        a.setAttribute('href', `/note.html?id=${note.id}`);

        // append the anchor tags to the li item
        li.append(a);

        // append the li item to the ul list
        ul.append(li);
    })

    // after coming out of the loop, append the ul list to the notesDiv
    notesDiv.append(ul);
}

(async () => {
    notes = await fetchNotes();
    await populate(notes);

    // create a new button to add a new note
    const addNoteButton = document.createElement('button');

    // set the text content of the button
    addNoteButton.textContent = 'Add Note';

    // attach an event listener to open the add note page
    addNoteButton.addEventListener('click', () => {
        // redirect to the add note page
        window.location.href = '/add-note.html';
    })

    notesDiv.append(addNoteButton);
})();