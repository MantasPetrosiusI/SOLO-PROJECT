/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/
const movies = [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ];

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

let test = "Never gonna give you up";
console.log("\n",test);

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/

let sum = 10 + 20;
console.log("\n",sum);

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

let random = Math.floor(Math.random()*20);
console.log("\n",random);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

let me = {
    name: "Mantas",
    surname: "Petrosius",
    age: 24
}
console.log("\n", me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/

delete me.age;
console.log("\n",me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

me.skills = ["Java", "Python", "JavaScript", "Html", "CSS"];

console.log("\n", me);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

me.skills.pop();
console.log("\n", me);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/
let randomNum = dice();
console.log("\nDice throw: ",randomNum);

function dice(){
    return Math.floor(Math.random() * 6) + 1;;
}

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
let num1 = 15;
let num2 = 6;
whoIsBigger(num1,num2);
function whoIsBigger(num1, num2){
    if(num1 > num2){
        console.log("\n", num1, " is a bigger number.")
    }else{
        console.log("\n" + num2, " is a bigger number.")
    }
}

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/
let string = "Never gonna let you down";
console.log("\n", "Original string: "+string+"\nAfter making it array: ",splitMe(string));
function splitMe(string){
    return string.split(" ");
}

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
string = "Never gonna run around and desert you";
let bool = true;
console.log("\nOriginal string: "+string+"\nString after function: "+deleteOne(string, bool));
function deleteOne(string, bool){

let tempString = string.split(' ');
if(bool === true){
    return tempString.slice(1).join(' ');
}else{
    return tempString.slice(0, -1).join(' ');
}
}

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
string = "I have 4 dogs";
console.log("\nOriginal string: "+string+"\nNew string:"+onlyLetters(string));
function onlyLetters(string){
    return string.replace(/[0-9]/g,'');;
}

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/
string = ("mantas.petrosius@outlook.com")
console.log("\n"+string+isThisAnEmail(string))
function isThisAnEmail(string){
    let check = /^\S+@\S+\.\S+$/;
    if (check.test(string)) {
        return " this indeed is an email."
    }else{
        return " this is not an email."
    }

}

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

console.log("Today is "+whatDayIsIt())

function whatDayIsIt(){
    let date = new Date();
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[date.getDay()];
}
/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/
let number = 2;
console.log("\nSum of two dice rolls is: ",rollTheDices(number));
function rollTheDices(number){
    let sum = 0;
    let diceValues = [];
    for(let i = 0; i < number; i++){
        diceValues[i] = dice();
        sum += diceValues[i];
        console.log()
    }
    return {sum, diceValues};
}

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

function formatDate(format){
    let month = format.getMonth() +1;
    let day = format.getDate();
    let year = format.getFullYear();
    let specificDate = month+"/"+day+"/"+year;
    return specificDate;
}
let date = new Date("11/21/2022");
    
console.log("Number of days that passed since "+formatDate(date)+"\n"+howManyDays(date));

function howManyDays(date){
    let date2 = new Date();
    let dateTime = date2.getTime() - date.getTime();
    let passedDays = dateTime /(1000*3600*24);
    return Math.floor(passedDays);
}

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
let birthday = new Date("01/22/1998");

console.log("Today is "+isTodayMyBirthday(birthday))

function isTodayMyBirthday(birthday){
    let today = new Date();
    if(today.getDate()  === birthday.getDate() && today.getMonth()+1 === birthday.getMonth()+1){
        return "your birthday."
    }else{
        return "not your birthday."

    }
}

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/
let object = {randomName: "nice", number: 15, whutIzGoinOn: "dont know"};
string = "number";
console.log("\n" , deleteProp(object, string));
function deleteProp(object, string){
    delete object[string];
    return object;
}

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
console.log("\nOldest movie is: ", oldestMovie(movies));
function oldestMovie(movies){
    let oldest = movies[0].Year;
    let index=0;
    for(let i = 1; i<movies.length-1; i++){
        if(oldest >= movies[i].Year){
            oldest = movies[i].Year;
            index = i;
        }
    }
    return movies[index];
}
/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/
console.log("\nNumber of movies inside array is: "+countMovies(movies))
function countMovies(movies){
    return movies.length;
}

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/
console.log("\n", onlyTheTitles(movies))
function onlyTheTitles(movies){
    let titlesOnly =[];
    for(let i = 0; i<movies.length; i++){
        titlesOnly[i] = movies[i].Title;
    }
    return titlesOnly;
}

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/
console.log("\nMovies produced in this millenium: ",onlyInThisMillenium(movies))
function onlyInThisMillenium(movies){
    let thisMill =[];
    for(let i = 0; i < movies.length; i++){
        //i did some research on this some say millenium start 2000 some say 2001 so im going with 2001;
        if(movies[i].Year>2000){
            thisMill.push(movies[i])
        }
    }
    return thisMill;
}

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/
let id = 'tt4154796';
console.log(getMovieById(id, movies));
function getMovieById(id, movies)
{
    for(let i = 0; i < movies.length; i++){
        if(id === movies[i].imdbID)
        return movies[i]
    }
}

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/
console.log("\nThe sum of all the years when the provided movies have been produces is: ",sumAllTheYears(movies));

function sumAllTheYears(movies){
    let sumYears = 0;
    for (let i = 0; i < movies.length; i++) {
        sumYears = sumYears + parseInt(movies[i].Year);
    }
    return sumYears;
}

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

let searchTitle = "rin"
console.log(searchByTitle(searchTitle));

function searchByTitle(searchTitle){
    let results = [];
    for(let i = 0; i < movies.length; i++){
        if(movies[i].Title.toUpperCase().includes(searchTitle.toUpperCase())){
            results.push(movies[i]);
        }
    }
    return results;
}

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

let searchTitle2 = "rin"
console.log("\n",searchAndDivide(searchTitle2));

function searchAndDivide(searchTitle2){
    let match = [];
    let unmatch = [];
    for(let i = 0; i < movies.length; i++){
        if(movies[i].Title.toUpperCase().includes(searchTitle2.toUpperCase())){
            match.push(movies[i]);
        }else{
            unmatch.push(movies[i])
        }
    }
    return {match, unmatch};
}

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

number = 12;
console.log("\n",removeIndex(number, movies))
function removeIndex(number, movies){
    let plsRemove = movies.splice(number, 1);
    return plsRemove;
}

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

let height = 3;
console.log("\nI could only afford half a tree :(\n");
halfTree(height)
function halfTree(height){
    let treeStuff = "";
    for( let i = 0; i < height; i++){
        for(let j = 0; j <i; j++){
            treeStuff +=  '*';
            console.log(treeStuff)
        }    
    }
    console.log('*');
}

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/

height = 3;
console.log("I borrewed some money for other half!! :)")
tree(height);
function tree(height){
    
 for(let i = 0; i<height; i++){
    let treeStuff = '*';
    let waste = ' ';
    treeStuff = treeStuff.repeat(2*i+1);
    waste = waste.repeat(height - i - 1);
    console.log(waste + treeStuff);
 }

}


/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

number = 8;
console.log("The number is "+isItPrime(number));

function isItPrime(number){
    let boolResult = false;
    for(let i = 2; i<=10; i++ ){
        if(i === number){
            i++;
        }else{
            if(number%i===0){
                boolResult = false;
            }else{
                boolResult = true;
            }
        }
        if(boolResult === true){
            return "prime!";
        }else{
            return "not prime!";
        }
    }
}

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */