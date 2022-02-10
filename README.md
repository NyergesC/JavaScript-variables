# JavaScript variables

## Story

There are a handful of building blocks that are present in most of the modern programming languages. One of these basic building blocks are variables. Think of them as "shelves" in your program. Whenever there is a value, that later may come useful again, you "create" a shelf, and store that particular value there. Later, when you need that value a few lines later in your code (a username, a bank account id, a bank account balance, a facebook comment’s text, or just a colorcode) you just refer to the shelf, where the value is stored, and you can use it again.

For every one of these building blocks, there is a so called _reserved keyword_ and a syntax. For variables these are the following.
```js
let x = 5
```
Where let is the reserved keyword indicating that we are about to declare a variable (create a shelf), x is the name of the variable (which could be pretty much anything), the equal sign is an operator (we will learn about operators later) which assigns the value of 5 to the just declared variable named x.

What can a value be? Well, pretty much anything, but on the first day of us learning javascript this does not help us at all, so lets just say for now, it is often some data contained in a common datastructure. This seems like it complicates the topic even further, but they are pretty intuitive. You will learn about the 5+2 most basic datastructures in this lesson.

A value can be represented with the following three primitive data structures
```js
let myNumber = 5
// where the value 5 is a NUMBER
// (and these lines starting with two slashes are comments, a text that is completely ignored at runtime)

let myText = "Bela"
// where "Bela" is a STRING (note syntax)

let mySwitch = true
// the so called BOOLEAN, can be true or false
```

Also, there are complex data structures, where you can group related data together

```js
let myFavoriteCarBrands = [ "Toyota", "Opel", "Lada" ]
// where the value is an ARRAY (which contains a few STRINGS)

let myFavoriteNumbers = [ 7, 19 ]
// also, an array can contain NUMBERS

let myRandomData = [ "Béla", 3, true, 12, 15, "Kázmér", false, [ "some", "nested", "list" ], 21 ]
// or, of course any primitive or complex value

let person = { "firstname": "Béla",  "lastname": "Kovács", "age": 20, "canVote": true }
// where person is an OBJECT, with custom key-value pairs
// where key is a custom STRING, and value can be anything - a STRING, a NUMBER a BOOLEAN, an ARRAY or an OBJECT
```

And of course, these can, and should be used together to model the world
```js
let pet1 = { "name": "bodri", "type": "dog", "age": 3 }
let pet2 = { "name": "cirmi", "type": "cat", "age": 2 }

let person = {
	"name": "Béla",
	"occupation": "software developer",
	"birthYear": 1980,
	"pets": [
		pet1, // note, that this is not a STRING - this is a variable, declared above.
		pet2  // this is also a variable - storing an OBJECT
	],
	"hobbies": [
		{ "name": "chess", "isDangerous": false },
		{ "name": "rock climbing", "isDangerous": true }
	],
	"primaryEmailAddress": {
		"username": "beluska123",
		"domain": "gmail.com"
	}
}
// Try not to get confused… chill out, that is pretty much it
```
In this lesson you learn about variables, data structures and you will model the world with them.

While learning JavaScript, you might come across the var and const keywords, those can also be used to create variables, but until you learn more about them, it is recommended to only use the let keyword when declaring variables.

## What are you going to learn?

Variables

## Tasks

1. Create a file: movie.js. Create a variable for the title of your favorite movie, a variable for the length of it in minutes, and a variable for storing if it is kid friendly. Then create a variable for the protagonist, which stores the name of it on the movie, and the name of the actor playing it in a complex data structure. Create a variable for the antagonist also, in the same schema. Then create a variable for your favorite movie, and store as much data in a single object as possible. Actors, year of release, awards won, whatever.
    - A variable called title exists, the related value is a string
    - A variable called length exists, the related value is a number
    - A variable called isKidFriendly exists, the related value is a boolean
    - A variable called protagonist exists, the related value is an object, which has at least two keys - actorName and characterName
    - A variable called antagonist exists, the related value is an object, which has at least two keys - actorName and characterName
    - A variable called myFavoriteMovie exists, its value is a complex datastructure with nested objects and arrays

2. Create a complex datastructure that holds the information about your facebook profile. Conform to the given criterias, but also, get creative. Try to model as much data about your profile as possible.
    - A variable called myProfile exists, its value is an object.
    - The object has a "username" key, with a string value.
    - The object has a "friends" key. Its value should be an array of objects.
    - The object has a "likes" key. Its value should be an array of objects.
    - The object has at least 5 more keys, with at least two of having a complex datastructure as a value.

3. Model something... Anything in the world that interests you. Try to be as detailed, as exhaustive as possible.
    - There is at least one variable, which value is a complex datastructure - an array, or an object.

## General requirements

- The javascript files are executed by nodejs.
- When the js files are executed, errors are not thrown

## Hints

- While learning JavaScript, you might come across the var and const keywords, those can also be used to create variables, but until you learn more about them, it is recommended to only use the let keyword when declaring variables.

- Do not dive in to udemy tutorials. Later they will come handy, but for
starters you will find so many unnecessary concepts.

- This code should not show any visible output

- If you want to create some sort of a “smoke test”, just to see that what you wrote works, create a mistake deliberately (a syntax error), run the code, check, what error it throws, then fix the problem and run the code again

- In general data is not “hardcoded” - actually, it is kind of rare to see data as complex as this hardcoded into the code. Usually it comes from the “outer world” somehow - from a database, a file, or a user input. We will learn about methods, how we can process data coming from the outer world, and how to present data to the outer world in later exercises.

- If you __really__ want to see some "output", use `console.log(myVariable)` at the end of your file, where `myVariable` is replaced with any variable that you have created, and `console.log()` is the most dummy way javascript can "interact" with the world. `console.log()` is by no means a basic building block of the language, a javascript runtime could very well exist without it. We usually use this _magic_ to debug our code, when we want to see, at a certain point of our application, where a code runs, what is the value of a variable.

## Background materials

- <i class="far fa-book-open"></i> [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
