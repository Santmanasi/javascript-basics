for(var number=0; number<=50;number++){
    if(number%3==0 && number%5==0){
        console.log("fizzbizz", number);
    }
    else if(number%5==0){
        console.log("bizz", number);
    }
    else if (number%3==0){
        console.log("fizz", number);
    }
    else {
        console.log(number);
    }
} 