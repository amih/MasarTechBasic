// 1. Open your web-browser
// 2. Open the Developer-tools with F12 or fn+F12
// 3. Go to the "console" tab
// 4. How much is 123 + 456 - 2 ?
// 5. What is the result of:
//    > "Hello " + 'Ami' + 4 * 5
// 6. What is the result of:
//    > "Hello " + 'Ami' + 4 + 5
// 7. Fix the error:
//    > "Hello " + 'Ami, how it's going? ' + 4 * 5
// 8. Print the string:
//    When Ami came to MasarTech he said, "Hello", I'm sure he was happy...
// 9. Write a function that gets 2 inputs and if they are both smallet than 5 prints out "small". If just one is small, it prints "mixed" and if both numbers are large, prints "large"
// 10. Write a function that gets a parameter - a number, and prints all numbers from 1 to that number
// 11. Write a function that prints the numbers in a line
// 12. Get the age of Joe from the variable newVariable123
//     > newVariable123 = [ { name: 'Ami', age: 51, shoes: 45, city: 'Hod Hasharon' }, { name: 'Joe', age: 18, shoes: 43, city: 'New York' }, { name: 'Mike', age: 23, shoes: 44, city: 'Miami' } ]
// 13. Here is an empty function, make it print some text with console.log
//     > ()=>{}
// 14. Don't worry if something didn't work, practice what you can, ask friends and we will discuss on Friday.
// 15. Read the lines below and think about it

theNameIs = 'Ami'
console.log( "Hello " + theNameIs + ", how are you?")
theNameIs = 'John'
console.log( "Hello " + theNameIs + ", how are you?")

theNameIs = 1 + 2
console.log( "Hello " + theNameIs + ", how are you?")
console.log( "Sorry, the answer to one plus two is: " + theNameIs)

myFunc = () => {}
myFunc()
myFunc = () => { return 4 }
myFunc()

myAddingFunc = (a, b) => { return a+b }
myAddingFunc(3, 4)
myAddingFunc( 31, 42 )

specialFunc = (a, b) => { if(a==2){ return a+b }else{ return a*b } }
specialFunc(2, 5)
specialFunc(5, 2)

counter = 7
console.log( 'The counter is: ' + counter )
counter = 13
console.log( 'The counter is: ' + counter )
counter = counter + 1
console.log( 'The counter is: ' + counter )
counter = counter + 2
console.log( 'The counter is: ' + counter )
counter++
console.log( 'The counter is: ' + counter )

myList = [ 7, 3, 88, 22, 0.11, -23, "RED", 'blue', 20000100 ]
console.log( 'The 1st element is: ' + myList[0] )
console.log( 'The 2nd element is: ' + myList[1] )
console.log( 'The 3rd element is: ' + myList[2] )

myObject = { firstName: "Ami", lastName: "Heines", ShoeSize: 45, Age: 51, city: "Hod Hasharon" }

console.log( "Hello " + myObject.firstName + ", I see you live in " + myObject.city )

listOfObjects = [
    { firstName: "Ami", lastName: "Heines", ShoeSize: 45, Age: 51, city: "Hod Hasharon" },
    { firstName: "Joe", lastName: "Cohen", ShoeSize: 42, Age: 24, city: "New York" },
    { firstName: "Marry", lastName: "Lane", ShoeSize: 43, Age: 46, city: "London" },
    { firstName: "Ringo", lastName: "Levy", ShoeSize: 38, Age: 34, city: "Haifa" },
    { firstName: "May", lastName: "Paz", ShoeSize: 46, Age: 21, city: "Tira" },
    { firstName: "Bob", lastName: "Zak", ShoeSize: 42, Age: 11, city: "Tel Aviv" },
]

for(i=0; i<6; i++){ console.log("Firstname:" + listOfObjects[i].firstName) }

myFunc = () => {for( counter = 20; counter > 10; counter = counter -1 ) { console.log( "the counter is: " + counter ) } }
() => {for( counter = 20; counter > 10; counter = counter -1 ) { console.log( "the counter is: " + counter ) } }
myFunc()

myFunc = () => {for( counter = 20; counter >= 10; counter = counter -1 ) { console.log( "the counter is: " + counter ) } }
() => {for( counter = 20; counter >= 10; counter = counter -1 ) { console.log( "the counter is: " + counter ) } }
myFunc()

myFunc = () => {for( counter = 20; counter >= 10; counter = counter -1 ) { console.log( "The element in l is: " + l[counter] ) } }
() => {for( counter = 20; counter >= 10; counter = counter -1 ) { console.log( "The element in l is: " + l[counter] ) } }
myFunc()

l = [342,423,4,24,23,2,34444]
(7) [342, 423, 4, 24, 23, 2, 34444]
myFunc = () => {for( counter = 6; counter >= 0; counter = counter -1 ) { console.log( "The element in l is: " + l[counter] ) } }
() => {for( counter = 6; counter >= 0; counter = counter -1 ) { console.log( "The element in l is: " + l[counter] ) } }
myFunc()

myFunc = () => {for( counter = 6; counter >= 0; counter-- ) { console.log( "The element in l is: " + l[counter] ) } }
() => {for( counter = 6; counter >= 0; counter-- ) { console.log( "The element in l is: " + l[counter] ) } }
myFunc()

myFunc = () => {for( counter = 1; counter <=10; counter++ ) { 
    for(yy = 1; yy <=10; yy ++){
        console.log( counter * yy ) } }
    }
    
    
() => {for( counter = 1; counter <=10; counter++ ) { 
    for(yy = 1; yy <=10; yy ++){
        console.log( counter * yy ) } }
    }
myFunc()

myFunc = () => {for( counter = 1; counter <=10; counter++ ) { 
    for(yy = 1; yy <=10; yy ++){
        console.log( counter * yy ) } }
    }
    
    
anotherFunc = () => {for( counter = 1; counter <=10; counter++ ) { 
    for(yy = 1; yy <=10; yy ++){
        console.log( counter * yy ) } }
    }
s = ''
''
s = s + "one "
'one '
s
'one '
s = s + "banana "
'one banana '
s
'one banana '
s = s + " and "
'one banana  and '
s = s + " apple"
'one banana  and  apple'
i=0
0
i=i+1
1
i++
i++
console.log(i)

s=''
''
s = s + 2
'2'
s = s + ' '
'2 '
s=s+'4'
'2 4'
myFunc = () => {for( counter = 1; counter <=10; counter++ ) { 
    for(yy = 1; yy <=10; yy ++){
        console.log( counter * yy ) } }
    }
    
    
() => {for( counter = 1; counter <=10; counter++ ) { 
    for(yy = 1; yy <=10; yy ++){
        console.log( counter * yy ) } }
    }
