
//------------------------------------------------------------------------------------------------

//Reverse a String 
//Reverse the provided string.

function reverseString(str) {
  var strArr = str.split("");
  var revArr = strArr.reverse("");
  var revStr = revArr.join("");
  console.log(strArr);
  console.log(revArr);
  console.log(revStr);
  return revStr;
}

reverseString("hello");

//------------------------------------------------------------------------------------------------

//Factorialize a Number 
//Return the factorial of the provided integer.

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  for (var i = num-1; i > 0; i--) {
    console.log(i);
    num = i * num;
  }
  return num;
}

factorialize(5);

//------------------------------------------------------------------------------------------------

//Check for Palindromes 
//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  // Good luck!
  var stripped = str.replace(/[^a-zA-Z0-9]/g, '');
  var lowerStrip = stripped.toLowerCase();
  console.log(lowerStrip);
  var arr = lowerStrip.split("").join("");
  var arrRev = lowerStrip.split("").reverse("").join("");
  console.log(arr);
  console.log(arrRev);
  if (arr == arrRev){
    return true;
  } else {
    return false;
  }
}


palindrome("not a palindrome");

//------------------------------------------------------------------------------------------------

//Find the Longest Word in a String 
//Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  
  str= str.split(" ").sort(function(a,b){
    return (b.length - a.length);
  });
  return str[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//------------------------------------------------------------------------------------------------

//Title Case a Sentence 
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  str = str.map(function(x){
    return x.replace(x[0],x[0].toUpperCase());
  });
  console.log(str);
  return str.join(" ");
}

titleCase("I'm a little tea pot");

//------------------------------------------------------------------------------------------------

//Return Largest Numbers in Arrays 
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  // You can do this!
  
  var results = [];
  for (var i = 0; i < arr.length; i++){
    var largestNumber = arr[i][0];
    arr[i] = arr[i].sort(function(a,b){
      return b-a;
    });
  results[i] = arr[i].shift();
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//------------------------------------------------------------------------------------------------

//Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str,target){
	var strCheck = str.split("");
    strCheck = strCheck.slice(strCheck.length - target.length).join("");
    if (target == strCheck){
      return true;
    } else {
      return false;
    }
}

confirmEnding("He has to give me a new name", "name");

//------------------------------------------------------------------------------------------------

//Repeat a string repeat a string 
//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  strAdd = "";
  if (num < 0) {
    return strAdd;
  } else {    
    for (var i = 1; i < num +1 ; i++){
      strAdd += str;
    }
    return strAdd;
  }
}

repeatStringNumTimes("abc", 3);

//------------------------------------------------------------------------------------------------

//Truncate a string
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str;
  } else if (num > 3){
      return str.slice(0,num-3) + "...";
  } else {
    return str.slice(0,num) + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);


//------------------------------------------------------------------------------------------------

//Chunky Monkey 
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

  var arrSlice = [];
  for (var i = 0; i < arr.length/size; i++){
    arrSlice.push(arr.slice(i*size, i*size + size));
  }
  return arrSlice;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//------------------------------------------------------------------------------------------------

//Slasher Flick 
//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

//------------------------------------------------------------------------------------------------

//Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
 
  var counter = 0;
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  for (var j = 0; j < arr[1].length; j++) {
      if (arr[0].indexOf(arr[1][j]) !== -1) {
        counter += 1;
      }
  }
  
  console.log("Counter length== " + counter + "\narr[1].length== " + arr[1].length);
  
  if (counter === arr[1].length){
    return true;
  } else {return false;
         }
}        

mutation(["voodoo", "no"]);

//------------------------------------------------------------------------------------------------

//Falsy Bouncer
//Remove all falsy values from an array.

function bouncer(arr) {
  function filtNow(value) {
   if (value === false) {
     console.log("false");
   } else if (value === null) {
     console.log("null");
   } else if (value === 0) {
     console.log("0");
   } else if (value === "") {
     console.log("''''");
   } else if (value === undefined) {
     console.log("undefined");   
   } else if (value === isNaN) {
     console.log("NaN");     
   } else {return value;}

  }
  
  return arr.filter(filtNow);
}

bouncer([7, "ate", "", false, 9]);

//------------------------------------------------------------------------------------------------

//Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  
  for(var j = 1; j < arguments.length; j++)
    for(var i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === arguments[j]) {
         arr.splice(i, 1);
      }
  }
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//------------------------------------------------------------------------------------------------

