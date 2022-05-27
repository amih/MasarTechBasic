console.log('one line of multiplication table')
console.log('שורה מלוח הכפל')

oneLine = (lineNumber) => {
	s1 = '' // preparing the line - start with empty!
	for(i=1; i <= 10; i++){
		s1 = s1 + ' ' + ( i * lineNumber )
	}
	return s1
}

// s2 = oneLine( 4 )
// console.log(s2)

for( j = 1; j <=10; j++){
	document.write( '<br>' + oneLine(j)  )
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

// test if the function works:
console.log( 'Test findMin (should be 2) ' )
console.log( findMin( [ 3,2,100,10,5 ] ) )

// test #2 if the function works:
console.log( 'Test findMin #2 (should be 2000000000) ' )
console.log( findMin( [ 3000000000, 2000000000, 10000000000 ] ) )


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