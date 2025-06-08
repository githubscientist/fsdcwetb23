let noteID;

function handleCancel(e) {
    e.preventDefault();

    // Go back to the previous page
    window.history.back();
}

async function readParams(id) {
    const params = new URLSearchParams(window.location.search);
    return params.get(id);
}

async function populateForm() {
    noteID = await readParams('id');

    // get the data from the API
    try {
        let response = await fetch(`https://683bdc3428a0b0f2fdc593ef.mockapi.io/notes/${noteID}`);
        let note = await response.json();

        // get the form elements
        let titleInput = document.getElementById('titleInput');
        let descriptionInput = document.getElementById('descriptionInput');
        let important = document.getElementById('important');
        let notImportant = document.getElementById('notImportant');

        titleInput.value = note.title;
        descriptionInput.value = note.description;
        if (note.important) {
            important.checked = true;
        } else {
            notImportant.checked = true;
        }
    } catch (error) {
        alert('error fetching note data, try again later');
    }
}

(async () => {
    await populateForm();
})();

function updateNote(e) {
    e.preventDefault();

    // get the note title, description and important fields
    let title = e.target.title.value;
    let description = e.target.description.value;
    let important = e.target.important.checked;

    // make an api call to create a new note
    fetch(`https://683bdc3428a0b0f2fdc593ef.mockapi.io/notes/${noteID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            description,
            important
        })
    })
        .then(response => {
            // show an alert to the user
            alert('Note updated successfully!');

            // reset the form
            e.target.reset();

            // go back to the previous page
            window.history.back();
        })
        .catch(error => {
            alert('Note updation failed, Try Again!:', error.message);
        })
}