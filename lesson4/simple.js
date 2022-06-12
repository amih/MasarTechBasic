addNewItem = () => {
	newValue = $('#newItemToAdd')[0].value
	if(newValue != ''){
		$('ul').append('<li><div class="itemName">' + newValue + ' </div> <button class="deleteMe">X</button> </li>')
		$('#newItemToAdd')[0].value = ''
	}
}

$(()=>{
	$('#addItemToList').on('click', ()=>{
		addNewItem()
	})
	
	$('#newItemToAdd').on('keydown', ( e )=>{
		if( e.originalEvent.key == 'Enter' ){
			addNewItem()
		}
	})
	
	$('ul').on('click', '.deleteMe', (e)=>{
		$(e.target).parent().remove()
	})
	
	$('.itemName').on('click', ( e ) => {
		// if user clicks the item, allow the user to edit it!
		oldValue = $( e.target )[0].innerHTML
		$( e.target ).parent().prepend('<input class="editOldValue" type="text" value="' + oldValue + '"></input>')
		// hide the div class itemName
		$( e.target ).hide()
		// <li>
		//PREPEND --> <input class="editOldValue" type="text" value="..."></input>
		//   <div class="itemName">
		// 	   Clean room
		// 	 </div>
		// 	 <button class="deleteMe">
		// 	   X
		//   </button>
		// </li>
	})
	$('ul').on('keydown', '.editOldValue', ( e ) => {
		if( e.originalEvent.key == 'Enter' ){
			editedItem = $(e.target)[0].value
			console.log('new edited value: ', editedItem)
			// put new value in div class itemName
			$( e.target ).parent().find('.itemName')[0].innerHTML = editedItem
			// show .itemName
			$( e.target ).parent().find('.itemName').show()
			// delete me!
			$( e.target ).remove()
		}
	})
})

