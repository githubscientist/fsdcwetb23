// create a container div
const container = document.createElement('div');

// set the class attribute for the container
container.setAttribute('class', 'container');

// create a table div
const tableContainer = document.createElement('div');

tableContainer.setAttribute('class', 'table');

let books = [
    {
        title: "Book Title",
        author: "Author Name",
        year: 2023,
        isbn: "1234567890"
    },
    {
        title: "Another Book",
        author: "Another Author",
        year: 2022,
        isbn: "0987654321"
    },
    {
        title: "Sample Book",
        author: "Sample Author",
        year: 2021,
        isbn: "1122334455"
    },
    {
        title: "Test Book",
        author: "Test Author",
        year: 2020,
        isbn: "5566778899"
    },
    {
        title: "Example Book",
        author: "Example Author",
        year: 2019,
        isbn: "1231231234"
    }
]

// create a table
const table = document.createElement('table');

const thead = document.createElement('thead');

const rowHead = document.createElement('tr');

let columns = Object.keys(books[0]);
columns.push('actions');

columns
    .map(column => column.toUpperCase())
    .map(col => {
        if (col != 'ISBN') return col.charAt(0) + col.slice(1,).toLowerCase();
        else return col;
    })
    .forEach(col => {
        let td = document.createElement('td');
        td.textContent = col;
        rowHead.append(td);
    })


const tbody = document.createElement('tbody');

books
    .forEach(book => {
        // create a table row
        const trow = document.createElement('tr');
        for (let key in book) {
            const tdata = document.createElement('td');
            tdata.textContent = book[key];
            trow.append(tdata);
        }
        let actionsData = document.createElement('td');
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');

        button1.textContent = 'Delete';
        button2.textContent = 'Edit';

        actionsData.append(button1, ' ', button2);
        trow.appendChild(actionsData);
        tbody.append(trow);
    })


// set the styles for table
table.setAttribute('border', "1");
table.setAttribute('cellpadding', "10");
table.setAttribute('width', "100%");
// table.style.borderCollapse = 'collapse';
table.setAttribute('style', 'border-collapse: collapse');

thead.append(rowHead);
table.append(thead, tbody);
tableContainer.append(table);
container.append(tableContainer);
document.body.append(container);
console.log(container);

/*
    const list = {
        Features: [
            "Bio section",
            "Skills showcase",
            "Project portfolio gallery"
        ],
        Technologies: [
            "HTML for Structure",
            "CSS for Styling"
        ]
    }
*/