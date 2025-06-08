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

async function fetchNote(noteID) {
    let response = await fetch(`https://683bdc3428a0b0f2fdc593ef.mockapi.io/notes/${noteID}`);
    let note = await response.json();
    return note;
}

async function getNote(noteID) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    console.log(notes);
    let note = notes.find(note => note.id === noteID);
    return note;
}

async function populateForm() {
    noteID = await readParams('id');

    // get the data from the API
    try {
        // let note = await fetchNote(noteID);
        let note = await getNote(noteID) || await fetchNote(noteID);

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

            // update the local storage
            let notes = JSON.parse(localStorage.getItem('notes')) || [];

            // find the index of the note to be updated
            let idx = notes.findIndex(note => note.id === noteID);

            // update the note in the local storage at that index
            notes[idx].title = title;
            notes[idx].description = description;
            notes[idx].important = important;
            notes[idx].updatedAt = new Date().toISOString(); // update the updatedAt field

            // save the updated notes back to local storage
            localStorage.setItem('notes', JSON.stringify(notes));

            // reset the form
            e.target.reset();

            // go back to the previous page
            window.history.back();
        })
        .catch(error => {
            alert('Note updation failed, Try Again!:', error.message);
        })
}

/*
id = 6
title = 'Web Development'
description = 'Web Page developed using HTML & CSS'
important = true
let idx = null;

note = notes
    .find((note, index) => {
            idx = index;
            return note.id === id;
        });

note.title = title;
note.description = description;
note.important = important;

notes.filter(note => note.id !== id).push(note)

[
  {
    "createdAt": "2025-05-31T12:05:56.697Z",
    "title": "JavaScript",
    "description": "JavaScript is the language of the WEB",
    "important": true,
    "updatedAt": "2025-06-01T02:02:44.888Z",
    "id": "1"
  },
  {
    "createdAt": "2025-05-31T07:29:58.245Z",
    "title": "Web Page Development",
    "description": "Web Page developed using HTML & CSS",
    "important": true,
    "updatedAt": "2025-06-01T00:55:17.909Z",
    "id": "6"
  },
  {
    "createdAt": "2025-06-07T12:51:59.081Z",
    "title": "CRUD Application",
    "description": "CRUD application using html, css and js",
    "important": true,
    "updatedAt": "2025-06-07T12:25:31.223Z",
    "id": "7"
  },
  {
    "createdAt": "2025-06-07T10:31:42.060Z",
    "title": "DOM API",
    "description": "HTML & CSS manipulation can be done with DOM API.",
    "important": true,
    "updatedAt": "2025-06-07T21:58:53.831Z",
    "id": "8"
  }
]
*/