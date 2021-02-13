/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.

let latitude = iss_location.iss_position.latitude
console.log(latitude)
let longitude = iss_location.iss_position.longitude
console.log(longitude)

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

// adds a key value pair to rates object
// from https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
rates.CHF = 1.1787
console.log(rates)

// a function to calculate exchange rate of euros to australian dollars
function euroToAUS(euros){
  dollars = euros * 1.5417
  return dollars
}
// calculating how many australian dollars you would get for 100 euros
let total = euroToAUS(100)
console.log(total)


// getting all the values in rates and putting them in a list
// from https://zellwk.com/blog/looping-through-js-objects/
const highest = Object.values(rates)

//loops through the list and finds the highest value by checking the numbers to the highest one so far in the list
// I learned how to do this in a previous class
let number = 0
for (let x=0;x<highest.length;x++){
  for (let x = 0;x<highest.length;x++){
    if (highest[x] > number){
      number = highest[x]
    }

  }
}
// highest value, number
console.log(number)

// loops through rates object's keys using the variable of key, if key is equal to the highest number it prints key of that number 
// from https://www.youtube.com/watch?v=Oh4c32qfNJg
let rate = Object.keys(rates).find(key => rates[key] == number)                 //3.8959
console.log(rate)
/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.

// prints the cat name of owner [1] Gary Oldman
let owned = cats_and_owners[1]
console.log(owned)

// adds a key value pair to cats_and_owners list
// from https://forum.freecodecamp.org/t/how-do-i-add-object-to-array-and-after-that-values-and-properties-to-it/218808
cats_and_owners.push({name: "Taylor Swift", cat: "Merideth"})
console.log(cats_and_owners)

//prints all owner's names with their cats's names 
cats_and_owners.forEach(function(names){
  console.log(names.name, ",", names.cat)
})


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017. 
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"

          // I copied this down here so it was easier to read 

          /* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017. 
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

        


        }
      ]
    }
  ]
}

// prints full name of literature prize winner by going through each index
  console.log(nobel_prize_winners_2017.prizes[3].laureates[0].firstname, nobel_prize_winners_2017.prizes[3].laureates[0].surname)
  
// prints id's of physics prize winners by looping through the physics winners index
for(let x =0;x<nobel_prize_winners_2017.prizes[0].laureates.length;x++){
  console.log(nobel_prize_winners_2017.prizes[0].laureates[x].id)
}
// prints all the prize catagories by looping through the whole list and finding all the catagories
for (let x=0;x<nobel_prize_winners_2017.prizes.length;x++){
    console.log(nobel_prize_winners_2017.prizes[x].category)
}

// counts the number of prize catagories
numCount = 0
for (let x =0;x<nobel_prize_winners_2017.prizes.length;x++){
  if(nobel_prize_winners_2017.prizes[x].category)
    numCount++

}
console.log(numCount)

// counts all the prize winners by looping through all the indexes of each lauretes list 
winners = 0
for (let x=0;x<nobel_prize_winners_2017.prizes.length;x++){
  for (let y=0;y<nobel_prize_winners_2017.prizes[x].laureates.length;y++){
    
      winners++

}
}

console.log(winners)



