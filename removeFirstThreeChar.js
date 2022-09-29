function runProgram(str){
    console.log("Given String: " + str);
    let res="";
    for(let i=3; i<str.length; i++){
        res += str[i];
    }

    return res;
}

console.log("Output String: "+ runProgram("special"))