var weight=prompt("Enter the weight");
var height=prompt("Enter the height");
var bmi=(weight/(height*height))*10000;
eval(bmi);
if(bmi<=18.4){
console.log("Underweight");
}
else if(bmi>=18.5 && bmi<=24.9){
console.log("You are healthy");
}
else if(bmi>=25 && bmi<=39.9){
console.log("overweight");
}

else{
console.log("Please reduce your weight : your are obese");
}