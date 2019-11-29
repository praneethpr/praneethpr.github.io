var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addDeleteButton(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDeleteButton(listItem) {
	let deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	let fafaDeleteIcon = document.createElement("i");
	fafaDeleteIcon.classList.add("fas", "fa-trash");
	deleteButton.appendChild(fafaDeleteIcon);
	listItem.appendChild(deleteButton);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

let list = document.querySelectorAll("li");
list.forEach(function (listItem) {
	addDeleteButton(listItem);
});

document.querySelector("ul").addEventListener("click", function (event){
	strikeThrough(event);
	deleteItem(event);
});

function strikeThrough(event) {
	if (event.target && event.target.nodeName === "LI") {
		event.target.classList.toggle("done");
	}
}

function deleteItem(event) {
	if (event.target && event.target.nodeName === "BUTTON") {
		event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	}
}

// function clearList() {
//     ul.innerHTML = "";
// }

// document.querySelector("#clear").addEventListener("click", clearList);