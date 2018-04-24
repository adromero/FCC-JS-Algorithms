


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