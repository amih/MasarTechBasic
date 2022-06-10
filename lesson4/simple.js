// $('div').on('click', (e)=>{
//     console.log(e.target.innerHTML
// )})

$('#addItemToList').on('click', ()=>{
	newValue = $('#newItemToAdd')[0].value
  // console.log('user clicked on "#addItemToList", the new item is: ' + newValue)
	$('ul').append('<li>' + newValue + ' <button class="deleteMe">X</button> </li>')
})

$('#newItemToAdd').on('keydown', ( e )=>{
	// console.log('user pressedKey, the actual key is::::', e.originalEvent.key)
	if( e.originalEvent.key == 'Enter' ){
		newValue = $('#newItemToAdd')[0].value
		$('ul').append('<li>' + newValue + ' <button class="deleteMe">X</button> </li>')
	}
})

$('ul').on('click', '.deleteMe', (e)=>{
  console.log('clicked on deleteMe!', e.target)
	$(e.target).parent().remove()
})
