//Exo page 2

//const hobbies = ["matin","midi","soir"]

//console.log(hobbies)

//Exo page 3

// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

// let listItem =[famousSayings]

// console.log(listItem)
// console.log(famousSayings[2])
// console.log(famousSayings[3])

//Exo page 4

// let groceryList = ['bread', 'tomatoes', 'milk'];
// groceryList[1] = 'avocados'

// console.log(groceryList)

//Exo Bonus

// let voiture = ['pneu', 'volant', 'moteur', 'radio'];

// voiture[1] = 'guidon'
// console.log(voiture)

//exo page 5 

// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// condiments[0] = 'Mayo';
// utensils[0] = 'Mayo';

// console.log(condiments+' '+utensils)

// condiments = ['Mayo']
// console.log(condiments)

// utensils[3] = 'Spoon'
// console.log(utensils)

//Exo page 6

// const objectives = ['Learn a new languΩages', 'Read 52 books', 'Run a marathon'];

// console.log(objectives.length)

//Exo page 7

 //const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// chores.push("passer le balai","sauter 3 fois")
// console.log(chores)

//Exo page  8

// const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// chores.pop()
// console.log(chores)

//Exo page 9

// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// groceryList.shift()
// groceryList.unshift("popcorn")
// console.log(groceryList.slice(1,4))
// const pastaIndex = groceryList.indexOf('pasta')
// console.log(pastaIndex)

//Exemple fonction fléchée
// let light = false;
// const manger = () => {
//     if(light){
//         return 'miamiam'
//     } else{
//         return 'jai faim'
//     }
    
// }
// console.log(manger());

//Exo page 10

// const concept = ['arrays', 'can', 'be', 'mutated'];

// function changeArr(arr){
//     arr[3] = "MUTATED"
// }

// changeArr(concept)
// console.log(concept)
// function removeElement(newArr) {
//     newArr.pop()
// }


//(fonction fléchée:
// const removeElement = (newArr) => {
// newArr.pop()
// })




// removeElement(concept)
// console.log(concept)

//Exo page 11

let numberClusters = [[1,2],[3,4],[5,6]]

const cible = numberClusters[2][1]
console.log(cible)