const option = document.querySelector('#languages');
const button = document.querySelector('#compile');
const editorContent = document.querySelector('#codeEditor');
console.log(option.selectedOptions[0].innerText);
// console.log(editorContent);

var request = new XMLHttpRequest();

//event listeners
button.addEventListener('click', sendRequest);

//functions
let headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};
function sendRequest(e) {
	e.preventDefault();
	// console.log('Code : ', editorContent.value);
	request.open('POST', 'https://codequotient.com/api/executeCode');
	request.setRequestHeader('Content-Type', 'application/json');
	let body = {
		code: editorContent.value,
		langId: option.selectedOptions[0].innerText,
	};
	// console.log(body);
	request.send(JSON.stringify(body));
}
