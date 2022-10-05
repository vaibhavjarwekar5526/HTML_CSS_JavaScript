returnPromise = (data)=>{
    return new Promise((resolve,reject)=>{
        if(isNaN(data)){
            reject("error");
        }
        else{
            if(data%2!==0){
                setTimeout(()=>{console.log("odd");},1000);
                resolve();
            }
            else{
                setTimeout(()=>{reject("even")},2000);
            }
        }
    });
}

returnPromise(5).catch((err)=>{console.log("Exception : "+err)});






