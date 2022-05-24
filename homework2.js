myShoppingList = [ "orange", 'milk', 'olive oil', 'pita', 'toilet paper' ]
(5) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper']
for( x = 0 ; x<5; x=x+1){
    console.log( myShoppingList[x] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[x] )
}
​ undefined
​ undefined
​ undefined
​ undefined
​ undefined
undefined
myShoppingList
(5) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper']
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
myShoppingList.length
5
for( xxx8 = 0 ; xxx8<myShoppingList.length; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
myShoppingList.push('Steak')
6
myShoppingList
(6) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper', 'Steak']
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<myShoppingList.length; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
​ Steak
undefined
myShoppingList = [ "orange", 'milk', 'olive oil', 'pita', 'toilet paper' ]
(5) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper']
for( x = 0 ; x<5; x=x+1){
    console.log( myShoppingList[x] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[x] )
}
​ undefined
​ undefined
​ undefined
​ undefined
​ undefined
undefined
myShoppingList
(5) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper']
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
myShoppingList.length
5
for( xxx8 = 0 ; xxx8<myShoppingList.length; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
myShoppingList.push('Steak')
6
myShoppingList
(6) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper', 'Steak']
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<myShoppingList.length; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
​ Steak
undefined
printMe = (a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + n + ", the item is: " + a[n] )
    }
}
(a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + n + ", the item is: " + a[n] )
    }
}
printMe( [ 'apple','banana','apricot' ] )
​ Item number: 0, the item is: apple
​ Item number: 1, the item is: banana
​ Item number: 2, the item is: apricot
undefined
printMe( [ 'one', 'another number', 'red', 'greeen', 'black' ] )
​ Item number: 0, the item is: one
​ Item number: 1, the item is: another number
​ Item number: 2, the item is: red
​ Item number: 3, the item is: greeen
​ Item number: 4, the item is: black
undefined
printMe = (a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + n + 1 + ", the item is: " + a[n] )
    }
}
(a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + n + 1 + ", the item is: " + a[n] )
    }
}
printMe( [ 'one', 'another number', 'red', 'greeen', 'black' ] )
​ Item number: 01, the item is: one
​ Item number: 11, the item is: another number
​ Item number: 21, the item is: red
​ Item number: 31, the item is: greeen
​ Item number: 41, the item is: black
undefined
printMe = (a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + (n + 1) + ", the item is: " + a[n] )
    }
}
(a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + (n + 1) + ", the item is: " + a[n] )
    }
}
printMe( [ 'one', 'another number', 'red', 'greeen', 'black' ] )
​ Item number: 1, the item is: one
​ Item number: 2, the item is: another number
​ Item number: 3, the item is: red
​ Item number: 4, the item is: greeen
​ Item number: 5, the item is: black
undefined
for(counter=0; counter<4; counter++){
    console.log( 'the counter is:' + counter )
}
​ the counter is:0
​ the counter is:1
​ the counter is:2
​ the counter is:3
undefined
multiplicationTable = () => {
    console.log( '1 2 3 4 5 6' )
    console.log( '2 4 6 8 10 12' )
    console.log( '3 6 9 12 15 18 21' )
}
() => {
    console.log( '1 2 3 4 5 6' )
    console.log( '2 4 6 8 10 12' )
    console.log( '3 6 9 12 15 18 21' )
}
multiplicationTable()
​ 1 2 3 4 5 6
​ 2 4 6 8 10 12
​ 3 6 9 12 15 18 21
undefined
multiplicationTable = () => {
    console.log( '1  2  3  4  5  6' )
    console.log( '2  4  6  8 10 12' )
    console.log( '3  6  9 12 15 18' )
}
() => {
    console.log( '1  2  3  4  5  6' )
    console.log( '2  4  6  8 10 12' )
    console.log( '3  6  9 12 15 18' )
}
multiplicationTable()
​ 1  2  3  4  5  6
​ 2  4  6  8 10 12
​ 3  6  9 12 15 18
undefined
multiplicationTable(10)
​ 1  2  3  4  5  6
​ 2  4  6  8 10 12
​ 3  6  9 12 15 18
undefined
multiplicationTable(20)
​ 1  2  3  4  5  6
​ 2  4  6  8 10 12
​ 3  6  9 12 15 18
undefined
for(i=0; i<10; i++){
    console.log(i)
}
​ 0
​ 1
​ 2
​ 3
​ 4
​ 5
​ 6
​ 7
​ 8
​ 9
undefined
oneLine = ''
''
oneLine = oneLine + '1'
'1'
oneLine = oneLine + '2'
'12'
oneLine = oneLine + '3'
'123'
oneLine = oneLine + '4'
'1234'
oneLine = ''
''
oneLine = oneLine + ' ' + '1'
' 1'
oneLine = oneLine + ' ' + '2'
' 1 2'
oneLine = oneLine + ' ' + '3'
' 1 2 3'
oneLine = oneLine + ' ' + '4'
' 1 2 3 4'
makeLine = () => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    return myLine
}
() => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    return myLine
}
makeLine()
' 0 1 2 3 4 5 6 7 8 9'
makeLine = () => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    
}
() => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    
}
makeLine()
undefined
calculateSum = (a,b) => { a+b }
(a,b) => { a+b }
calculateSum(3,4)
undefined
calculateSum = (a,b) => { return a+b }
(a,b) => { return a+b }
calculateSum(3,4)
7
makeLine = () => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    return myLine
}
() => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    return myLine
}
makeLine()
' 0 1 2 3 4 5 6 7 8 9'
makeLine = () => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + (i+1) 
    }
    return myLine
}
() => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + (i+1) 
    }
    return myLine
}
makeLine()
' 1 2 3 4 5 6 7 8 9 10'
makeLine = () => {
    myLine = ''
    for(i=1; i<=10; i++){
        myLine = myLine + ' ' + i
    }
    return myLine
}
() => {
    myLine = ''
    for(i=1; i<=10; i++){
        myLine = myLine + ' ' + i
    }
    return myLine
}
makeLine()
' 1 2 3 4 5 6 7 8 9 10'
makeLine = () => {
    myLine = ''
    for(i=1; i<11; i++){
        myLine = myLine + ' ' + i
    }
    return myLine
}
() => {
    myLine = ''
    for(i=1; i<11; i++){
        myLine = myLine + ' ' + i
    }
    return myLine
}
makeLine()
' 1 2 3 4 5 6 7 8 9 10'
myShoppingList = [ "orange", 'milk', 'olive oil', 'pita', 'toilet paper' ]
(5) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper']
for( x = 0 ; x<5; x=x+1){
    console.log( myShoppingList[x] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[x] )
}
​ undefined
​ undefined
​ undefined
​ undefined
​ undefined
undefined
myShoppingList
(5) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper']
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
myShoppingList.length
5
for( xxx8 = 0 ; xxx8<myShoppingList.length; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
myShoppingList.push('Steak')
6
myShoppingList
(6) ['orange', 'milk', 'olive oil', 'pita', 'toilet paper', 'Steak']
for( xxx8 = 0 ; xxx8<5; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
undefined
for( xxx8 = 0 ; xxx8<myShoppingList.length; xxx8++){
    console.log( myShoppingList[xxx8] )
}
​ orange
​ milk
​ olive oil
​ pita
​ toilet paper
​ Steak
undefined
printMe = (a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + n + ", the item is: " + a[n] )
    }
}
(a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + n + ", the item is: " + a[n] )
    }
}
printMe( [ 'apple','banana','apricot' ] )
​ Item number: 0, the item is: apple
​ Item number: 1, the item is: banana
​ Item number: 2, the item is: apricot
undefined
printMe( [ 'one', 'another number', 'red', 'greeen', 'black' ] )
​ Item number: 0, the item is: one
​ Item number: 1, the item is: another number
​ Item number: 2, the item is: red
​ Item number: 3, the item is: greeen
​ Item number: 4, the item is: black
undefined
printMe = (a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + n + 1 + ", the item is: " + a[n] )
    }
}
(a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + n + 1 + ", the item is: " + a[n] )
    }
}
printMe( [ 'one', 'another number', 'red', 'greeen', 'black' ] )
​ Item number: 01, the item is: one
​ Item number: 11, the item is: another number
​ Item number: 21, the item is: red
​ Item number: 31, the item is: greeen
​ Item number: 41, the item is: black
undefined
printMe = (a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + (n + 1) + ", the item is: " + a[n] )
    }
}
(a) => {
    for(n=0; n<a.length; n++){
        console.log( "Item number: " + (n + 1) + ", the item is: " + a[n] )
    }
}
printMe( [ 'one', 'another number', 'red', 'greeen', 'black' ] )
​ Item number: 1, the item is: one
​ Item number: 2, the item is: another number
​ Item number: 3, the item is: red
​ Item number: 4, the item is: greeen
​ Item number: 5, the item is: black
undefined
for(counter=0; counter<4; counter++){
    console.log( 'the counter is:' + counter )
}
​ the counter is:0
​ the counter is:1
​ the counter is:2
​ the counter is:3
undefined
multiplicationTable = () => {
    console.log( '1 2 3 4 5 6' )
    console.log( '2 4 6 8 10 12' )
    console.log( '3 6 9 12 15 18 21' )
}
() => {
    console.log( '1 2 3 4 5 6' )
    console.log( '2 4 6 8 10 12' )
    console.log( '3 6 9 12 15 18 21' )
}
multiplicationTable()
​ 1 2 3 4 5 6
​ 2 4 6 8 10 12
​ 3 6 9 12 15 18 21
undefined
multiplicationTable = () => {
    console.log( '1  2  3  4  5  6' )
    console.log( '2  4  6  8 10 12' )
    console.log( '3  6  9 12 15 18' )
}
() => {
    console.log( '1  2  3  4  5  6' )
    console.log( '2  4  6  8 10 12' )
    console.log( '3  6  9 12 15 18' )
}
multiplicationTable()
​ 1  2  3  4  5  6
​ 2  4  6  8 10 12
​ 3  6  9 12 15 18
undefined
multiplicationTable(10)
​ 1  2  3  4  5  6
​ 2  4  6  8 10 12
​ 3  6  9 12 15 18
undefined
multiplicationTable(20)
​ 1  2  3  4  5  6
​ 2  4  6  8 10 12
​ 3  6  9 12 15 18
undefined
for(i=0; i<10; i++){
    console.log(i)
}
​ 0
​ 1
​ 2
​ 3
​ 4
​ 5
​ 6
​ 7
​ 8
​ 9
undefined
oneLine = ''
''
oneLine = oneLine + '1'
'1'
oneLine = oneLine + '2'
'12'
oneLine = oneLine + '3'
'123'
oneLine = oneLine + '4'
'1234'
oneLine = ''
''
oneLine = oneLine + ' ' + '1'
' 1'
oneLine = oneLine + ' ' + '2'
' 1 2'
oneLine = oneLine + ' ' + '3'
' 1 2 3'
oneLine = oneLine + ' ' + '4'
' 1 2 3 4'
makeLine = () => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    return myLine
}
() => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    return myLine
}
makeLine()
' 0 1 2 3 4 5 6 7 8 9'
makeLine = () => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    
}
() => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    
}
makeLine()
undefined
calculateSum = (a,b) => { a+b }
(a,b) => { a+b }
calculateSum(3,4)
undefined
calculateSum = (a,b) => { return a+b }
(a,b) => { return a+b }
calculateSum(3,4)
7
makeLine = () => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    return myLine
}
() => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + i 
    }
    return myLine
}
makeLine()
' 0 1 2 3 4 5 6 7 8 9'
makeLine = () => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + (i+1) 
    }
    return myLine
}
() => {
    myLine = ''
    for(i=0; i<10; i++){
        myLine = myLine + ' ' + (i+1) 
    }
    return myLine
}
makeLine()
' 1 2 3 4 5 6 7 8 9 10'
makeLine = () => {
    myLine = ''
    for(i=1; i<=10; i++){
        myLine = myLine + ' ' + i
    }
    return myLine
}
() => {
    myLine = ''
    for(i=1; i<=10; i++){
        myLine = myLine + ' ' + i
    }
    return myLine
}
makeLine()
' 1 2 3 4 5 6 7 8 9 10'
makeLine = () => {
    myLine = ''
    for(i=1; i<11; i++){
        myLine = myLine + ' ' + i
    }
    return myLine
}
() => {
    myLine = ''
    for(i=1; i<11; i++){
        myLine = myLine + ' ' + i
    }
    return myLine
}
makeLine()
' 1 2 3 4 5 6 7 8 9 10'
makeLine(3)
' 1 2 3 4 5 6 7 8 9 10'
makeLine = (a) => {
    myLine = ''
    for(i=1; i<11; i++){
        myLine = myLine + ' ' + (i*a)
    }
    return myLine
}
(a) => {
    myLine = ''
    for(i=1; i<11; i++){
        myLine = myLine + ' ' + (i*a)
    }
    return myLine
}
makeLine(3)
' 3 6 9 12 15 18 21 24 27 30'
makeLine(4)
' 4 8 12 16 20 24 28 32 36 40'
makeLine(['orange', 'black'])
' NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN'
makeLine(4)
' 4 8 12 16 20 24 28 32 36 40'
makeLine = (a) => {
    myLine = ''
    for(i=1; i<11; i++){
        myLine = myLine + ' ' + (i*a)
    }
    return myLine
}
(a) => {
    myLine = ''
    for(i=1; i<11; i++){
        myLine = myLine + ' ' + (i*a)
    }
    return myLine
}
makeLine(1) ; makeLine(2); makeLine(3)
' 3 6 9 12 15 18 21 24 27 30'
for(i = 1; i<=10; i++){
    makeLine(i)
}
' 1 2 3 4 5 6 7 8 9 10'
for(i = 1; i<=10; i++){
    console.log( makeLine(i) )
} 
​  1 2 3 4 5 6 7 8 9 10
undefined
for(i = 1; i<=10; i++){
    console.log( makeLine(i) )
} 
​  1 2 3 4 5 6 7 8 9 10
undefined
makeLine(8)
' 8 16 24 32 40 48 56 64 72 80'
makeAll = () => {
    for(i = 1; i<=10; i++){
        console.log( makeLine(i) )
    }
}
() => {
    for(i = 1; i<=10; i++){
        console.log( makeLine(i) )
    }
}
makeAll()
​  1 2 3 4 5 6 7 8 9 10
undefined
makeAll = () => {
    for(i = 1; i<=10; i++){
        console.log( i )
        console.log( makeLine(i) )
    }
}
() => {
    for(i = 1; i<=10; i++){
        console.log( i )
        console.log( makeLine(i) )
    }
}
makeAll()
​ 1
​  1 2 3 4 5 6 7 8 9 10
undefined
makeAll = () => {
    for(x = 1; x<=10; x++){
        console.log( x )
        console.log( makeLine(x) )
    }
}
() => {
    for(x = 1; x<=10; x++){
        console.log( x )
        console.log( makeLine(x) )
    }
}
makeAll()
​ 1
​  1 2 3 4 5 6 7 8 9 10
​ 2
​  2 4 6 8 10 12 14 16 18 20
​ 3
​  3 6 9 12 15 18 21 24 27 30
​ 4
​  4 8 12 16 20 24 28 32 36 40
​ 5
​  5 10 15 20 25 30 35 40 45 50
​ 6
​  6 12 18 24 30 36 42 48 54 60
​ 7
​  7 14 21 28 35 42 49 56 63 70
​ 8
​  8 16 24 32 40 48 56 64 72 80
​ 9
​  9 18 27 36 45 54 63 72 81 90
​ 10
​  10 20 30 40 50 60 70 80 90 100
undefined
makeAll = () => {
    for(x = 1; x<=10; x++){
        console.log( makeLine(x) )
    }
}
() => {
    for(x = 1; x<=10; x++){
        console.log( makeLine(x) )
    }
}
makeAll()
​  1 2 3 4 5 6 7 8 9 10
​  2 4 6 8 10 12 14 16 18 20
​  3 6 9 12 15 18 21 24 27 30
​  4 8 12 16 20 24 28 32 36 40
​  5 10 15 20 25 30 35 40 45 50
​  6 12 18 24 30 36 42 48 54 60
​  7 14 21 28 35 42 49 56 63 70
​  8 16 24 32 40 48 56 64 72 80
​  9 18 27 36 45 54 63 72 81 90
​  10 20 30 40 50 60 70 80 90 100
undefined
123+456-2
577
123 + 456 - 2
577
123 + 456 - 2
577
"Hello " + 'Ami' + 4 * 5
'Hello Ami20'
"Hello " + 'Ami ' + 4 * 5
'Hello Ami 20'
"Hello " + 'Ami' + 4 + 5
'Hello Ami45'
"Hello " + 'Ami ' + 4 + 5
'Hello Ami 45'
"Hello " + 'Ami ' + (4 + 5)
'Hello Ami 9'
"Hello " + 'Ami, how it's going? ' + 4 * 5
​ Uncaught SyntaxError: Unexpected identifier
"Hello " + "Ami, how it's going? " + 4 * 5
"Hello Ami, how it's going? 20"
When Ami came
​ Uncaught SyntaxError: Unexpected identifier
"When Ami came"
'When Ami came'
'When Ami came to MasarTech he said, "Hello", ' + "I'm sure he was happy..."
`When Ami came to MasarTech he said, "Hello", I'm sure he was happy...`
'my name it\'s heklkfd'
"my name it's heklkfd"
"lsdkfj lkjdsf lkjsdf lksdjf \"sdkfh\" sdlkhfkjh "
'lsdkfj lkjdsf lkjsdf lksdjf "sdkfh" sdlkhfkjh '
'When Ami came to MasarTech he said, "Hello", I\'m sure he was happy...'
`When Ami came to MasarTech he said, "Hello", I'm sure he was happy...`
'When Ami came to MasarTech he said, "Hello", I\'m sure he was happy...'
`When Ami came to MasarTech he said, "Hello", I'm sure he was happy...`
'When Ami came to MasarTech he said,\n "Hello", I\'m sure he was happy...'
`When Ami came to MasarTech he said,\n "Hello", I'm sure he was happy...`
'When Ami came to MasarTech he said,/n "Hello", I\'m sure he was happy...'
`When Ami came to MasarTech he said,/n "Hello", I'm sure he was happy...`
console.log('When Ami came to MasarTech he said,/n "Hello", I\'m sure he was happy...')
​ When Ami came to MasarTech he said,/n "Hello", I'm sure he was happy...
undefined
console.log('When Ami came to MasarTech he said,\n "Hello", I\'m sure he was happy...')
​ When Ami came to MasarTech he said,
 "Hello", I'm sure he was happy...
undefined
console.log('When Ami came to MasarTech he said,\n"Hello", I\'m sure he was happy...')
​ When Ami came to MasarTech he said,
"Hello", I'm sure he was happy...
undefined
myAddingFunc = (a, b) => { return a+b }
(a, b) => { return a+b }
myAddingFunc(3,4)
7
myAddingFunc(88,77)
165
a = true
true
b = 321
321
c = 'hello'
'hello'
  c  == 3
false
"hello" == c
true
specialFunc = (a, b) => { if(a==2){ return "I will compute the sum:" + (a+b) }else{ return "I will multiply:" + a*b } }
(a, b) => { if(a==2){ return "I will compute the sum:" + (a+b) }else{ return "I will multiply:" + a*b } }
specialFunc(3,3)
'I will multiply:9'
specialFunc(2,3)
'I will compute the sum:5'
specialFunc(3,2)
'I will multiply:6'
homework8 = (a,b)=>{
    if(a<5){
        if(b<5){
            return "small"
        }else}{
            return "mixed"
        }
    }else{
        if(b<5){
            return "small"
        }else}{
            return "mixed"
        }
    }
}
​ Uncaught SyntaxError: Unexpected token '}'
homework8 = (a,b)=>{
    if(a<5){
        if(b<5){
            return "small"
        }else{
            return "mixed"
        }
    }else{
        if(b<5){
            return "small"
        }else{
            return "mixed"
        }
    }
}
(a,b)=>{
    if(a<5){
        if(b<5){
            return "small"
        }else{
            return "mixed"
        }
    }else{
        if(b<5){
            return "small"
        }else{
           …
homework8( 234234,23423423)
'mixed'
homework8 = (a,b)=>{
    if(a<5){
        if(b<5){
            return "small"
        }else{
            return "mixed"
        }
    }else{
        if(b<5){
            return "mixed - 2"
        }else{
            return "REALLY LARGE!!!"
        }
    }
}
(a,b)=>{
    if(a<5){
        if(b<5){
            return "small"
        }else{
            return "mixed"
        }
    }else{
        if(b<5){
            return "mixed - 2"
        }else{
       …
homework8( 234234,23423423)
'REALLY LARGE!!!'
homework8( 234234,2)
'mixed - 2'
homework8( 4,2234234)
'mixed'
homework8( 4,2)
'small'
homework8 = (a,b)=>{
    if(a<5){
        if(b<5){
            return "small"
        }else{
            return "mixed"
        }
    }else{
        if(b<5){
            return "mixed"
        }else{
            return "large"
        }
    }
}
(a,b)=>{
    if(a<5){
        if(b<5){
            return "small"
        }else{
            return "mixed"
        }
    }else{
        if(b<5){
            return "mixed"
        }else{
           …
homework8( 4,2)
'small'
