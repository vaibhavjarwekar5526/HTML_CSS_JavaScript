function runProgram(input){
    input = input.split("\n");
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    
    console.log(num1, num2, num3);

    if( num1 > num2 ){
        if( num1 > num3 ){
            console.log( num1 + " is greatest out of 3 numbers");
        }
        else{
            console.log( num3 + " is greatest out of 3 numbers");
        }
    }
    else{
        if( num2 > num3){
            console.log( num2 + " is greatest out of 3 numbers");
        }
        else{
            console.log( num3 + " is greatest out of 3 numbers");
        }
    }
    
}

runProgram(`5
9
8`);