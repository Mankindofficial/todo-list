const add = document.querySelector("abbr");
const ul = document.querySelector("ul");
const submit = document.querySelector("#submit");
const title = document.querySelector("input");
const text = document.querySelector("textarea");
const form = document.querySelector("form");
const li = document.getElementsByTagName('span');
const cancel = document.getElementsByClassName("del");

const addNote = (e) => {
	e.preventDefault();
	if(title.value === "" && text.value === ""){
		alert("Please Fill in the Required fields");
	} else {
		let span = document.createElement("span")
		span.innerHTML = `<li><strong>${title.value}:</strong> ${text.value}</li><abbr class="del" title="Delete Todo">X</abbr>`;
		ul.appendChild(span);
		title.value = "";
		text.value = "";
		buttonListElement();
	}
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
