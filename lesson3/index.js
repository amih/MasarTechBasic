console.log('one line of multiplication table')
console.log('שורה מלוח הכפל')

oneLine = (lineNumber) => {
	s1 = '' // preparing the line - start with empty!
	for(i=1; i <= 10; i++){
		nextNum = i * lineNumber
		if(nextNum<10){
			s1 = s1 + ' &nbsp;&nbsp;' + nextNum
		}else if(nextNum<100){
			s1 = s1 + ' &nbsp;' + nextNum
		}else{
			s1 = s1 + ' ' + nextNum
		}
	}
	return s1
}



// s2 = oneLine( 4 )
// console.log(s2)
elem = document.querySelector ( '#multiplicationTable' )
for( j = 1; j <=10; j++){
	// console.log( oneLine(j)  )
	// find the div by ID (multiplicationTable)
	// write the line to it.
	// document.write( '<br>' + oneLine(j)  )
	if( j % 2 ){
		elem.innerHTML += '<div class="even">' + oneLine(j) + '</div>'
	}else{
		elem.innerHTML += '<div class="odd">' + oneLine(j) + '</div>'
	}
}

// find minimum of list of numbers
findMin = ( a ) => {
	x = a[0]
	for( i = 0 ; i < a.length; i++ ){
		if( x>a[i] ){
			x = a[i]
		}
	}
	return x // the final x is the answer
}

// // test if the function works:
// console.log( 'Test findMin (should be 2) ' )
// console.log( findMin( [ 3,2,100,10,5 ] ) )

// // test #2 if the function works:
// console.log( 'Test findMin #2 (should be 2000000000) ' )
// console.log( findMin( [ 3000000000, 2000000000, 10000000000 ] ) )


makeNewPersonObject = (theNewName, theAge, shoeSize) => {
	return {
		name: theNewName,
		age: theAge,
		shoes: shoeSize
	}
}
// a = makeNewPersonObject("Ami", 51, 45)
// console.log('The new object is: ', a)
// a = makeNewPersonObject("John Lenon", 36, 38)
// console.log('The new object is: ', a)
// a = makeNewPersonObject("Mike", 33, 22)
// console.log('The new object is: ', a)

// HOMEWORK
////////////
// 1. practice multicursor,
// convert the list to separate rows:
// Sun, Mon, Tue, Wed, Thu, Fri, Sat

// 2. Write a function to find the
// largest number in a list and return it

// 3. change the function oneLine to have equal spaces between numbers,
//    to make the multiplication table nicer an the columns will be straight.
//    so, instead of: '1 2 3 4 5 6 7 8 9 10'
//    it should be:   '  1   2   3   4   5   6   7   8   9  10'
//    so the lines with 2 digit numbers will be aligned with one digit lines above it, see example:
//
// this is not nice:
// 1 2 3 4 5 6 7 8 9 10
// 2 4 6 8 10 12 14 16 18 20
// 3 6 9 12 15 18 21 24 27 30
// 4 8 12 16 20 24 28 32 36 40
// 5 10 15 20 25 30 35 40 45 50
// 6 12 18 24 30 36 42 48 54 60
// 7 14 21 28 35 42 49 56 63 70
// 8 16 24 32 40 48 56 64 72 80
// 9 18 27 36 45 54 63 72 81 90
// 10 20 30 40 50 60 70 80 90 100
//
// this is nice:
//   1   2   3   4   5   6   7   8   9  10
//   2   4   6   8  10  12  14  16  18  20
//   3   6   9  12  15  18  21  24  27  30
//   4   8  12  16  20  24  28  32  36  40
//   5  10  15  20  25  30  35  40  45  50
//   6  12  18  24  30  36  42  48  54  60
//   7  14  21  28  35  42  49  56  63  70
//   8  16  24  32  40  48  56  64  72  80
//   9  18  27  36  45  54  63  72  81  90
//  10  20  30  40  50  60  70  80  90 100

person = { firstName: "Ami", lastName: "Heines", age: 51, shoeSize: 45 }


getOnlyEvenNumbers = (param) => {
	console.log('good:' + param.length)
	console.log('bad :' + param.lenght)
  s = []
  for(i=0; i<param.lenght; i++){
		// console.log('in loop, i:' + i)
		if( param[i] % 2 == 0 ){
			// console.log('found even num:' + param[i])
			s.push( param[i] )
		}
	}
	return s
}
console.log('testing get EVEN numbers:')
myArray = [ 432,234,23,4,234,1,2,2,2,2,3,5,2,34,4,54,6,4,67,5,8,854,6,456,3,999 ]
console.log( getOnlyEvenNumbers(myArray) )
console.log('testing AGAIN get EVEN numbers:')
myList = [ 1,2,3,4,5,6,7,8,9,10  ]
console.log( getOnlyEvenNumbers(myList) )

// 1. write a function "getOnlyEvenNumbers" which gets an input a list of numbers
//    and returns only the even numbers ( the ones that have num % 2 == 0 )
//
//    the function is almost ready, fix the bug!
//    hint: look carefully at the good and bad lines, 113 and 114.
// 2. In your html File, add to the <head> a link tag with css property of './index.css'
// 3. create a new file called index.css in your folder
// 4. add css commands to it, similar to this project.
// 		#explainerText{ ... }
// 		#multiplicationTable{ ... }
// 		.even{ ... }
// 5. Change your html so it will have one div with the text above the multiplication table
//    and another empty div for the multiplication table.
// 6. change your multiplication table code in your js file, so it will be like the code in this file
// 7. change the multiplication table to make odd lines style: background-color: yellow
// 8. change the parameter from "% 2" to "% 3" and check what happens