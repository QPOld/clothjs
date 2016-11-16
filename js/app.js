
window.onload = function(){
	cloth.append('body', 'div', attrs={
		'id' : 'app'
	});
	cloth.append('app','div',attrs={
		'id':'square'
	});
	cloth.append('app', 'input', attrs={
		'id' : 'sub',
		'type' : 'submit',
		'value' : 'Create'
	});
}