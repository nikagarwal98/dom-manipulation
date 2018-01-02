function cat(){
	console.log("cat")
}
cat()

let dog = function(){
	return "dog"
}
console.log(dog())

let squirrel = () => {
	console.log("squirrel")
}
squirrel()

let squirrel2 = (name) => {
	console.log(name+ "squirrel")
}
squirrel2()

let squirrelNames = ["Mack", "Pack", "Jack", "Quack"]
let printer = squirrelNames.forEach((name) => {
	let sentence = name + " is a squirrel!"	
	console.log(sentence)
	return sentence
})
console.log(printer)

let printer2 = squirrelNames.map((name) => {
	let sentence = name + " is a squirrel!"	
	console.log(sentence)
	return sentence
})
console.log(printer2)
