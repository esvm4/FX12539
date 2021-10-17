// Store Multiple Values in one Variable using JavaScript Arrays
var myArray0 = ['aString', 4];

// Access Array Data with Indexes
var myArray1 = [50,60,70];
var myData = myArray1[0];

// Modify Array Data With Indexes
var myArray2 = [18,64,99];
myArray2[0]=45;
myArray2[1]=64;
myArray2[2]=99;

// Access Multi-Dimensional Arrays With Indexes
var myArray3 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData3 = myArray3[2][1];

// Manipulate Arrays With push()
var myArray4 = [["John", 23], ["cat", 2]];
myArray4.push(["dog",3]);

// Manipulate Arrays With pop()
var myArray5 = [["John", 23], ["cat", 2]];
var removedFromMyArray5=myArray5.pop();

// Manipulate Arrays With shift()
var myArray6 = [["John", 23], ["dog", 3]];
var removedFromMyArray6=myArray6.shift();


// Manipulate Arrays With unshift()
var myArray7 = [["John", 23], ["dog", 3]];
myArray7.shift();
myArray7.unshift(["Paul", 35]);


// Iterate with JavaScript For Loops
var myArray8 = [];
for (var i = 1; i < 6; i++) {
  myArray8.push(i);
}

// Iterate Odd Numbers With a For Loop
var myArray9 = [];
for (var i = 1; i < 10; i += 2) {
  myArray9.push(i);
}

// Count Backwards With a For Loop
var myArray10 = [];
for (var i = 9; i > 0; i -= 2) {
  myArray10.push(i);
}

// Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];
var total =0 ;
for (var i = 0; i < myArr.length; i++) {
  total+=myArr[i];
}
console.log(total);

// Iterate with JavaScript While Loops
var myArray11 = [];
var i = 0;
while(i < 6) {
  myArray11.unshift(i);
  i++;
}

// Iterate with JavaScript Do...While Loops
var myArray12 = [];
var i = 10;
do {
  myArray12.push(i);
  i++;
} while (i < 10);

// Nesting For Loops
function multiplyAll(arr) {
var product = 1;
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    product*=arr[i][j];
  }
}
  return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);

// concatenate arrays
const firstName = ["Nguyen", "Phung"];
const lastName = ["Thanh", "Ngoc", "Linus"];
const fullName = firstName.concat(lastName); 

// join array, return string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
var breakfast = fruits.join(" and ");

// push() to add a node of an array
const ingredients = ["strawberry", "flour", "sugar"];
ingredients.push("kiwi");
var aSentence = "How to make a cake with " + ingredients.join(" and ");

// pop() to remove the last node of an array
const ingredients = ["strawberry", "flour", "sugar"];
ingredients.pop();
var aSentence = "How to make a cake with " + ingredients.join(" and ");

// unshift() to add the 1st node of an array
const ingredients = ["strawberry", "flour", "sugar"];
ingredients.unshift("kiwi"); // kiwi is now the 1st ingredients
var aSentence = "How to make a cake with " + ingredients.join(" and ");

// shift() to remove the 1st node of an array
const ingredients = ["strawberry", "flour", "sugar"];
ingredients.shift(); // no strawberry
var aSentence = "How to make a cake with " + ingredients.join(" and ");

// sort() an array
const ingredients = ["strawberry", "flour", "sugar"];
ingredients.sort(); // but it overwrites the old one.
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b}); // ascendingly
points.sort(function(a, b){return a-b}); // descendingly

// reverse() an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse(); // overwrites the old one