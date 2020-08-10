let term = ""
const lItem = document.querySelector('ol');
let myCookies = {};


// Add a new to-do item.
let addElement = (item) => {
    term = document.getElementById('addItem').value;

    if (!term || term === "") {
        alert('Please enter an item')
    } else {
        let listItem = document.createElement('li');
        let itemText = document.createTextNode(term);
        listItem.appendChild(itemText);

        let list = document.getElementById('list');
        list.appendChild(listItem);
    }
}

const addBtn = document.querySelectorAll("button")[0];
addBtn.addEventListener('click', addElement);


// Mark an existing item as completed with a double click.
let markCompleted = lItem.addEventListener('dblclick', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.style.textDecoration = "line-through";
        ev.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        ev.target.style.color = "rgba(0, 0, 0, 0.6)";
        ev.target.style.borderRadius = "10px";
    }
}, false);


// Remove all the completed items from the list, by clicking the “Clear completed” button.
let completedElement = function (e) {
    let temp = document.getElementsByTagName('li');
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].style.textDecoration == "line-through") {
            console.log('Completed!');
            temp[i].style.display = "none";
        }
    }
}

const completedBtn = document.querySelectorAll("button")[1];
completedBtn.addEventListener('click', completedElement);


// Remove all the items from the list, by clicking an “Empty list” button.
button3.onclick = () => {
    const myList = document.getElementById("list");
    myList.textContent = '';
}

