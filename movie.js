let title = "The Fifth element"
let length = 126
let kidFriendly = true

let protagonist = {"characterName":"Korben Dallas", "actorName":"Bruce Willis"}
let antagonist = {"characterName": "Jean-Baptiste-Emmanuel Zorg", "actorName":"Gary Oldman"}

let myFavoriteMovie = {
    "title": "The Fifth element",
    "length" : 126,
    "kidFriendly" : true,
    "mainCharacters" : [protagonist, antagonist],
    "yearOfRelease" : 1997,
    "awards" : [
        {"name": "Oscar", "type": "Best of special effect", "year": 1998, "winner": false},
        {"name": "Bafta", "type": "Best of special effect", "year": 1998, "winner": true},
        {"name": "Felix", "type": "Best costume design", "year": 1998, "winner": true},

    ]
}

for (let i = 0; i < myFavoriteMovie.awards.length; i++) {
   // console.log(i); //
   console.log(myFavoriteMovie.awards[i].name)

}

for (const award of myFavoriteMovie.awards) {
    console.log(award.name)
    
}

//console.log(myFavoriteMovie.awards[0].name)//