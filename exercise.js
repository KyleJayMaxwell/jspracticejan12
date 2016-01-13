console.log("SECTION ONE");

var nums = ['one', 'two', 'three', 'four', 'ten'];
nums.pop();
console.log("Array 1: " + nums);

var letters = ['a', 'b', 'c', 'd'];
letters.push('e');
console.log("Array 2: " + letters);

var vehicles = ['lollipop', 'car', 'truck', 'tank'];
vehicles.shift();
console.log("Array 3: " + vehicles);

var sports = ['football', 'baseball', 'hockey'];
sports.unshift('rugby');
console.log("Array 4: " +sports);

var years = [1990, 2015, 1066, 43, 90, 1607];
years.splice(2,3);
console.log("Splice Array 1: " + years);

var movies = ['The Great Escape', 'Love Actually', 'Blade Runner', 'Indian Jones and the Last Crusade'];
movies.splice(1,1);
console.log("Splice Array 2: " + movies);

var greekLetters = ['beta', 'gamma', 'alpha', 'epsilon', 'delta'];
greekLetters.sort();
console.log("Sorted Greek Letters Array: " + greekLetters);

console.log("SECTION TWO");

var animals = ['dog', 'cat', 'eagle', 'cow'];
animals.splice(2,2);
animals.splice(0,1);
console.log("Animals Array: " + animals);

var names = ['jeff', 'tony', 'tabitha', 'annie', 'edward', 'james'];
names.splice(0,3);
console.log("Names Array: " + names);

var firstNums = [1,2,3];
var secondNums = [4,5,6];
var together = firstNums.concat(secondNums);
console.log("Concat Array: " + together);

var arr = ['Bradley','is','super','amazing'];
var jointed = arr.join(' ');
console.log("Array Joined: " + jointed);

console.log('SECTION THREE');

var str1 = 'Javascript is really ';
var str2 = 'really really great!';
var str3 = str1.concat(str2);
console.log("Concat String: " + str3);

var talk = 'Now I\'m Shouting';
var shouts = talk.toUpperCase();
console.log("Array Shouting: " + shouts);

var shout = 'EVERYONE BE QUIET';
var quietly = shout.toLowerCase();
console.log("Array quiet: " + quietly);

var string = 'Super Amazing Stuff';
var ating = string.charAt(9);
console.log("Character positioning array: " + ating);

var fullTitle = 'Lord Edward Swivington the 3rd';
var halfTitle = fullTitle.slice(5,22);
console.log("Slice Array: " + halfTitle);

var year = '1990';
var yearSplit = year.split('');
console.log("Split Array 1: " + yearSplit);

var quoteIndy = 'Why did it have to be snakes?';
var indy = quoteIndy.split(' ');
console.log("Split Array 2: " + indy);

var lyric = '     Here I am. ROCK you like a hurricane.      ';
var cleanedUp = lyric.trim();
console.log("Trim Array: " + cleanedUp);

console.log("SECTION FOUR");

var checked = 'Oy! I am a normal string!';
var checkedArray = [];

function os (string){
  for(i=0;i<=checked.length;i++){
    if (checked[i]==="o" || checked[i]==="O") {
      checkedArray.push(i);
    };
  }
  console.log(checkedArray);
}

os(checked);

var input = "6666666621";
var inputarray = [];

function dashed (numbers){
  parseInt(numbers);
  for(i=0;i<numbers.length;i++){
    if(i%2 !==0 && i !==numbers.length-1){
      inputarray.push(numbers[i]+"-");
    } else {
      inputarray.push(numbers[i]);
    }
  }
  console.log(inputarray.join(''));
}

dashed(input);

var stuff = [12, 23, 'fuck', 'shit', 2, 'up', '150', 'lbs'];
var stuffarray2= [];
var stuffarray3= [];

function removeShit (theInput){
  for(i=0;i<theInput.length;i++){
    if (isNaN(theInput[i])===false) {
      stuffarray2.push(theInput[i]);
    } else {
      stuffarray3.push(theInput[i]);
    }
  }
  console.log(stuffarray2);
}
removeShit(stuff);

var randomArray = ['fuck', 'shit', 'up', 'bitch'];
// var lowest = 0;
// var highest = randomArray.length-1;

//declare a function named grabRandom that accepts a single argument: array
function grabRandom(array){
  //declare variable 'highest' that is assigned the length of the array parameter
  var highest=array.length;
  //declare a variable 'thing' that creates a random integer (using floor) that is
  //between 0 and the length of the array represented by the 'highest' variable
  var thing = Math.floor((Math.random(0, highest)*highest));
  //logs the index position that will be selected from the array
  console.log("Index Position: " + thing);
  //logs a random index value from the array parameter at position 'thing' to the
  //console
  console.log(array[thing]);
}

//invoke the grabRandom function using the randomArray variable declared above
grabRandom(randomArray);

var randomShit = "Fuck Shit Up";
var empty="";

function reverse (string){
  for(i=string.length-1;i>=0;i--){
    empty += string[i];
  }
  console.log(empty);
}
reverse(randomShit);  

var numbered = 345789;
var emptynum = ""

function reverseNum (number){
  newvar = number.toString();
  for(i=newvar.length-1;i>=0;i--){
    emptynum += newvar[i];
  }
  console.log(emptynum);
}
reverseNum(numbered);  

var strungOut = "fuck i am done";
var strung= [];

function alphabet (string){
    stuff = string.replace(/\s/g, "");
    for(i=0;i<stuff.length;i++){
      newstring = stuff.split("");
      strung.push(newstring[i]);
      newstring.sort();
    }
    console.log(newstring.join(""));
}
alphabet(strungOut);

var testLongest = "This is a test strings to show length";
var testLongArray = [];

function getLongest(string){
    var broken = string.split(" ");
    max = 1;
    for(i=0;i<broken.length;i++){
      if(broken[i].length>max){
        max=broken[i].length;
        bigword = broken[i];
      } 
    }
    console.log("The longest word is: "+ bigword + " which is this amount of characters: " + max);
}
getLongest(testLongest);

var testYear = "1996";

function addYear (year){
  var separateYear = year.split("");
  base = 0;
  for(i=0;i<year.length;i++){
    base+=parseInt(year[i]);
  }
  console.log(testYear +" equals: " + base);
}
addYear(testYear);

var fullNames = ["Kyle Maxwell", "Mesut Ozil"];
var first = [];

function firstNames (array){
  for(i=0;i<fullNames.length;i++){
    newName = array[i].split(" ");
    console.log(newName);
    if(newName[0]){
      first.push(newName[0]);
    }
  }
  console.log("The First Names are: " + first);
}
firstNames(fullNames);

var normal = "The Quick Brown Fox";

function switched (string){
  broke = normal.split(" ");
  console.log(broke);
  if (broke[0]) {
    broke[0].toLowerCase();
  };
  console.log(broke);
}

switched(normal);



