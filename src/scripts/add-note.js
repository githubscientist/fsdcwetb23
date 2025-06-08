function createNote(e) {
    e.preventDefault();

    // get the note title, description and important fields
    let title = e.target.title.value;
    let description = e.target.description.value;
    let important = e.target.important.checked;

    // make an api call to create a new note
    fetch('https://683bdc3428a0b0f2fdc593ef.mockapi.io/notes', {
        method: 'POST',
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
            alert('Note created successfully!');

            // reset the form
            e.target.reset();

            // redirect to the notes page
            window.location.href = '/';
        })
        .catch(error => {
            alert('Note creation failed, Try Again!:', error.message);
        })
}