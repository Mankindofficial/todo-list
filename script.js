const add = document.querySelector(".p");
const ul = document.querySelector("ul");
const submit = document.querySelector("#submit");
const title = document.querySelector("input");
const text = document.querySelector("textarea");
const form = document.querySelector("form");
const li = document.getElementsByTagName('span');
const cancel = document.getElementsByTagName("h4");

const addNote = (e) => {
	e.preventDefault();
	if(title.value === "" && text.value === ""){
		alert("Please Fill in the Required fields");
	} else {
		let span = document.createElement("span")
		span.innerHTML = `<li><strong>${title.value}:</strong> ${text.value}</li><h4><abbr title="Delete Todo">X</abbr></h4>`;
		ul.appendChild(span);
		title.value = "";
		text.value = "";
		buttonListElement();
	}
	// let li = document.createElement("li");
	// li.appendChild(document.createTextNode(`${title.value}: ${text.value}`));
	// ul.appendChild(li);
	// let del = document.createElement("h4");
	// del.appendChild(document.createTextNode("X"));
	// li.appendChild(del);
}
const addNotePress = (e) => {
	if (event.keyCode === 13){
		addNote(e);
	}
}	
const showTextSpace = (e) => {
	e.preventDefault();
	form.classList.toggle("dropdown");
}

submit.addEventListener("click", addNote);
title.addEventListener("keyPress", addNotePress);
add.addEventListener('click', showTextSpace);


function buttonListElement(){
	for (let i = 0; i < cancel.length; i++) {
		cancel[i].addEventListener("click",  clearElement);
	}
}

function clearElement(){
	this.parentNode.remove();
}
