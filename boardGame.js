function runProgram(a,b){
    if(a>=b){
        return false;
    }
    let need = b-a;
    if(need>=1 && need<=6){
        return true;
    }
    else{
        return false;
    }

}

console.log(runProgram(3,7));