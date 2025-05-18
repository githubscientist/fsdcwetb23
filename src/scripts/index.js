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
const list = {
    Features: [
        "Bio section",
        "Skills showcase",
        "Project portfolio gallery"
    ],
    Technologies: [
        "HTML for Structure",
        "CSS for Styling"
    ],
    Tools: [
        "Git",
        "SVN",
        "Figma"
    ],
    Frameworks: [
        "React",
        "Express",
        "Vue"
    ]
}

// create a container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// create an unordered list
const ulist = document.createElement('ul');

for (let key in list) {
    // create a list item
    const li = document.createElement('li');
    li.textContent = key;

    // create an unordered list
    const subList = document.createElement('ul');

    for (let item of list[key]) {
        const subListItem = document.createElement('li');

        subListItem.textContent = item;

        subList.append(subListItem);
    }

    li.append(subList);

    // append li tags to ulist
    ulist.append(li);
}

// append the unordered list into the container
container.append(ulist);

// append the container to the document body
document.body.append(container);

console.log(container);