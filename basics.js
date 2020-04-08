// alert("Welcome to my page bro.")


// if (apple > 10 && orange >10){
// 	message= "Oversale";
// }else if (apple === 0 && orange === 0 ){
// 	message = "No sale"
// }else{
// 	message="We have some sale."
// }
// console.log(message)

       // If/else statement in JS(javascript)
// alert("je")
// for(i=0; i < 25; i ++){
// 	if(i % 2 !== 0){
// 		console.log(i)

// 	}
// }
       //to find odd number of range
 

// function sleepTime(weekday, vacation){
// 	return (!weekday || vacation)
// }

// function monkeyTrouble(aSmile, bSmile){
// 	return (aSmile && bSmile) || (!aSmile && !bSmile) 
// }

// function stringTimes(str, n){
// 	var returnStr = "";
// 	var i = 0;
// 	while (i < n){
// 		returnStr += str
// 		i ++
// 	}
// }
// function luckySum(a, b, c){
// 	if(a == 13){
// 		return 0
// 	}
// 	if(b == 13){
// 		return a
// 	}
// 	if (c == 13){
// 		return a + b
// 	}
// 	return a + b + c

// }

// function caughtSpeeding(speed, is_birthday){
// 	if (is_birthday){
// 		speed -= 5
// 	}
// 	if (speed <=60){
// 		return 0
// 	}
// 	if(60<speed <= 80){
// 		return 1
// 	}
// 	return 2 
// }


// var peopleNames = []

// function addMember(){
// 	var newName = prompt("Enter the name: ")
// 	peopleNames.push(newName)
// }
// function removeName(){
// 	var deleteName = prompt("Enter the name: ")
// 	var index = peopleNames.indexOf(deleteName)
// 	peopleNames.splice(index, 1)
// }
// function actionDisplay(){
// 	console.log(peopleNames)
// }
// function wrongChoise(){
// 	alert('Wrong Choise.')
// }

// var start = prompt("Enter the option: y / n ")
// var request = "empty";

// if (start == 'y'){
// 	while( request != 'quit'){
// 		request = prompt("Enter the option add, remove, display and exit: ")
// 		if (request == "add") {
// 			addMember()
// 		}else if (request == "remove") {
// 			removeName()
// 		}else if (request == "display"){
// 			actionDisplay()
		
// 		}

// 	}

// }

// var employee = {
// 	name : "urinov Azizbek",
// 	age : 31,
// 	job : "Computer Engineer",
// 	nameLenght: function(){
// 		console.log(this.name + "Bitch ");
// 	}
// }

// var employee = {
// 	name : "urinov Azizbek",
// 	age : 31,
// 	job : "Computer Engineer",
// 	nameLenght: function(){
// 		console.log("hello. My name is" + this.name + "My age is "+ this.age + "My major is " + this.job);
// 	}
// }

$('h2').click(function(){
	$(this).css('color', 'red')
})







