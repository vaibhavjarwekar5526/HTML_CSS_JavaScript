function runProgram(arr){
    let boomerCount=0;

    let mainArr=[];
    let temp=[];

    for(let i=0; i<3; i++){
        temp.push(arr[i]);
    }
    mainArr.push([...temp]);

    for(let i=3; i<arr.length; i++){
        temp.shift();
        temp.push(arr[i]);
        mainArr.push([...temp]);
    }
    
    for(let i=0; i<mainArr.length; i++){
        if(mainArr[i][0]==mainArr[i][2] && mainArr[i][0]!=mainArr[i][1] && mainArr[i][1]!=mainArr[i][2]){
            boomerCount++;
            console.log(mainArr[i]);
            
        }
    }

    return boomerCount;
}

console.log("Bommerang Count: "+ runProgram([3,7,3,2,1,5,1,2,2,-2,2]));
//[9, 5, 9, 5, 1, 1, 1]
//[5,6,6,7,6,3,9]
//[4,4,4,9,9,9,9]
//[3,7,3,2,1,5,1,2,2,-2,2]
