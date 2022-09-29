function runProgram(set){
    const array=[...set];
    return array;
}

const set = new Set(["Vaibhav", "Swapnil", "Ratnesh"]);

/*set.add(1);
set.add(2);
set.add(3);*/
console.log(set)
console.log(runProgram(set));