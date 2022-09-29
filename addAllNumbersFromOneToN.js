function runProgram(num){
    console.log("Given number is " + num);
    let sum =0;
    for(let i=1; i<=num; i++){
        sum += i;
    }

    return sum;
}

console.log("The total sum is "+runProgram(600));