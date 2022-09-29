function runProgram(arr1, arr2){
    arr1 = arr1.concat(arr2);
    console.log(arr1);
    arr1.sort((a,b)=>{
        return a-b;
    })
    console.log(arr1);
    let res =[];
    for(let i=0; i<arr1.length; i++){
        if(res.length==0){
            res.push(arr1[i]);
        }
        else if(res[res.length-1]!=arr1[i]){
            res.push(arr1[i])
        }
        else{
            continue;
        }
    }
    return res;

}

console.log(runProgram([1,2,3,4,5],[2,3,4,5,6,7]));