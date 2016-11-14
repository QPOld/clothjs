
window.onload = function(){
	cloth.append('body', 'div', attrs={
		'id' : 'app'
	});
	cloth.append('app', 'input', attrs = {
		'id' : 'textInput',
		'type' : 'text',
		'placeholder' : 'Enter Data Here',
	});
	cloth.append('app', 'input', attrs={
		'id' : 'textSubmit',
		'type' : 'submit',
		'value' : 'Submit'
	});
}