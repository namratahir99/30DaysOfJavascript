//day 1 exercise

let name = "namra"
let age = 23
let lightOn = true
let country = null
let time;
console.log("name", name, age, lightOn, country, time)


let home;
let company
let week
let adress


let city = "lahore"
let lastName = "tahir"
let glasses = "glass"
let watch = 4




let firstName = "namra"
let lastname = "tahir"
let maritalStatus = "marired"
let Age = 23
let Country = "pakistan"
let space = ' '

let colour = "black",
    height = 50



myAge = 23
yourAge = 29

console.log("i am " + myAge + " years old")
console.log("your are " + yourAge + " years old")

//Day 2 
//examples

//primitive data type
let job = "statelife"
job[1] = "o"
console.log(job)


//non primitive 

let catagory = ["statelife", "tmobile", "zameen.com"]

catagory[0] = 'amazon'

console.log(catagory)


//math object

const PI = Math.PI
console.log(PI)

console.log(Math.round(8.67))

console.log(Math.floor(8.23))

console.log(Math.ceil(8.43))

let randomNum = Math.random()

let numbtnzerototen = randomNum * 11
console.log(numbtnzerototen)
let randomNumRoundToFloor = Math.floor(numbtnzerototen)
console.log(randomNumRoundToFloor)

//string method

let flower = "purpule"
console.log(flower.length)


let game = "car_game"

console.log(game[4])

console.log(game.toUpperCase())

console.log(game.toLowerCase())

console.log("no end", game.substr(3))

let data = "my name is namra"
console.log(data.split(''))
console.log(data.split("   "))

let Data = "chair,book,home,mobile"

console.log(Data.split(" , "))

console.log(data.trim(' '))

console.log(data.includes("Name"))
console.log(data.includes("name"))


console.log(data.replace('namra', "sumama"))

console.log(data.charCodeAt(3))


let myName = "Namra Tahir";


console.log("game sub", myName.split(" "));
console.log("game sub", myName.substring(6, 11));

console.log('substr ' + data.substr(3, 5))

console.log(data.lastIndexOf('is'))

console.log(data.concat('. my name is sumama'))


console.log(data.startsWith("my"))

console.log(data.endsWith("namra"))

console.log(data.search("a"))

console.log(data.match("namra"))

console.log(data.repeat(2))


//String to Int

/*parseInt()
Number()
Plus sign(+)*/

let num = '877'

console.log(parseInt(num))



console.log(+num)

console.log(Number(num))


let Numb = "77"


let numInt = parseInt(Numb)
console.log(numInt)



//String to Float

/*parseFloat()
Number()
Plus sign(+*/


let order = "98.9"

console.log(parseFloat(order))

let orderFloat = parseFloat(order)

console.log(+orderFloat)

console.log(Number(order))


//Float to Int

console.log(parseInt(order))

//Day 2: Exercises
//Exercise: Level 1

let challenge = "30 Days Of JavaScript"


console.log(challenge)

console.log(challenge.length)


console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(3, 4))

console.log(challenge.substring(3, 7))

console.log(challenge.substring(3))


console.log(challenge.includes("Script"))

console.log(challenge.split())

console.log(challenge.split(" "))



let apps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(apps.split(","))



console.log(challenge.replace("JavaScript", 'Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt("J"))

console.log(challenge.indexOf("a"))

console.log(challenge.lastIndexOf("a"))


let statement = 'You cannot end a sentence with because because because is a conjunction'

console.log(statement.indexOf("because"))

console.log(statement.lastIndexOf("because"))

console.log(statement.search("because"))


let trim = ' 30 Days Of JavaScript '
console.log(trim.trim(" "))

console.log(challenge.startsWith(30))

console.log(challenge.endsWith("Script"))

console.log(challenge.match(/a/gi))


let merge = "30 Days of"

console.log(merge.concat(" Javascript"))

console.log(challenge.repeat(2))




//Exercise: Level 2



console.log("'The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.'")

console.log("'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'")

console.log(typeof "10")

console.log(Math.ceil(parseFloat("9.8")) === 10)

let phraseOn = "python and jargon"
let words = phraseOn.split(" and ");
console.log(words[0].includes("on") && words[1].includes("on"))


let review = "I hope this course is not full of jargon."
console.log(review.match("jargon") != null)
console.log(includes(review, "jargon"))


function includes(string, word) {
    if (string.match(word) != null) {
        return true;
    } else {
        return false
    }
}

let random = Math.random()

let numbtnzerotoHundred = random * 11
let floorNumbtnzerotoHundred = Math.floor(numbtnzerotoHundred)
console.log(floorNumbtnzerotoHundred)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt(50, 100))

console.log(getRandomInt(0, 255))


let randomStr = "javascript"
let randomLetter = randomStr.charAt(getRandomInt(0, randomStr.length))
console.log(randomLetter)


console.log('1\t1\t1\t1\t1')
console.log("2\t1\t2\t4\t8")
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t46')
console.log('5\t1\t5\t25\t125')
























































// 123 123 $234 234