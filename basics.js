/*const ageYear = 1900;

let century;
if (ageYear>=2000){
century = 20;
console.log(century);
}
else 
console.log("19th century");
*/

function divisibleBySeven(){
    for (var number=7; number<=99;number++){
        if(number%7==0){
            console.log(number)
        }
    }
}
divisibleBySeven();

function divisibility(){
    for (var number =7; number<=99; number++){
        if (number%7==0 && number%9==0){
            console.log(number);
        }
    }
}
divisibility(); 

