function runProgram(obj,name,value){
    obj[name]=value;
    return obj;
}

console.log(runProgram({ piano: 500, stereo: 300 }, "Caligula", 440));
