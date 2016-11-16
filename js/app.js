
window.onload = function(){
	cloth.append('body', 'div', attrs={
		'id' : 'app'
	});
	cloth.append('app', 'input', attrs = {
		'id' : 'textInput',
	});
	cloth.append('app', 'input', attrs={
		'id' : 'textSubmit',
		'type' : 'submit',
		'value' : 'Submit'
	});
	cloth.append('app','a',attrs={
		'id':'test',
		'href':'#'
	});
	cloth.adjust('test','click me',true)
}