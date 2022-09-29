function runProgram(arr1,arr2){

    let arr1max=Number.MIN_SAFE_INTEGER;
    let arr1min=Number.MAX_SAFE_INTEGER;
    let arr2max=Number.MIN_SAFE_INTEGER;
    let arr2min=Number.MAX_SAFE_INTEGER;

    for(let i=0; i<arr1.length; i++){
        if(arr1max<arr1[i]){
            arr1max=arr1[i];
        }
        if(arr1min>arr1[i]){
            arr1min=arr1[i];
        }
    }

    for(let i=0; i<arr2.length; i++){
        if(arr2max<arr2[i]){
            arr2max=arr2[i];
        }
        if(arr2min>arr2[i]){
            arr2min=arr2[i];
        }
    }
    
    if(arr1min>arr2min && arr1max<arr2max){
        return "true";
    }
    else{
        return "false";
    }

}

console.log(runProgram([2,3,4],[1,2,3,4,5,6]));

