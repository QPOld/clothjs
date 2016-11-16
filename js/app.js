
window.onload = function(){
	cloth.append('body', 'div', attrs={
		'id' : 'app'
	});
	cloth.append('app', 'p', attrs = {
		'id' : 'textInput',
		'innerHTML' : 'Enter Data Here',
	});
	cloth.append('app', 'input', attrs={
		'id' : 'textSubmit',
		'type' : 'submit',
		'value' : 'Submit'
	});
}