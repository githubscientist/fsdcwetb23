let noteID;

async function readParams(id) {
    const params = new URLSearchParams(window.location.search);
    return params.get(id);
}

async function fetchNote(noteID) {
    try {
        const response = await fetch(`https://683bdc3428a0b0f2fdc593ef.mockapi.io/notes/${noteID}`);
        const note = await response.json();
        return note;
    } catch (error) {
        console.log(error.message);
        return {};
    }
}

function populate(note) {
    // get all the elements
    let title = document.querySelector('.title');
    let description = document.querySelector('.description');
    let isImportant = document.querySelector('.isImportant');
    let createdAt = document.querySelector('.createdAt');
    let updatedAt = document.querySelector('.updatedAt');

    // set the contens of the elements
    title.textContent = note.title;
    description.textContent = note.description;
    // isImportant.textContent = note.important;
    createdAt.textContent = `Created At: ${note.createdAt}`;
    updatedAt.textContent = `Updated At: ${note.updatedAt}`;
}

(async () => {
    noteID = await readParams('id');
    const note = await fetchNote(noteID);
    populate(note);
})();

function deleteNote() {
    let option = confirm('Are you sure?');
    if (option) {
        fetch(`https://683bdc3428a0b0f2fdc593ef.mockapi.io/notes/${noteID}`, {
            method: 'DELETE',
        })
            .then(() => {
                alert('note deleted');

                window.location.href = '/';
            })
            .catch(() => {
                alert('note delete failed');
            })
    } else {
        return;
    }
}

let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', deleteNote);

let editButton = document.querySelector('.edit');
editButton.addEventListener('click', () => {
    window.location.href = `/edit.html?id=${noteID}`;
});