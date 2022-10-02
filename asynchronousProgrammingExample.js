/*//Asynchronous Programming

addition = (a,b) => {
    console.log(a+b);
}

subtraction = (a,b) => {
    let res = a-b;
    setTimeout((a,b)=>{console.log(res);}, 1000);
}

multiplication = (a,b) => {
    console.log(a*b);
}

addition(6,7);
subtraction(10,8);
multiplication(4,5);*/

//------------------------------------------------

//Callbacks
/*addition=()=>{
    console.log(6+7);
}
    
subtraction=(callback)=>{setTimeout(()=>{console.log(10-8); callback()},1000)} 


multiplication=()=>{
    console.log(4*5);
}

subtraction(function (){
    addition(10,8);
    multiplication(4,5);
})*/
addition=(a,b,callback)=>{
    setTimeout(()=>{let res= a+b; console.log(res); callback()},1000);
}
    
subtraction=(a,b)=>{console.log(a-b)} 


multiplication=(a,b)=>{
    console.log(a*b);
}

addition(6,7,function (){
    subtraction(10,8);
    multiplication(4,5);
})



//------------------------------------------------

//promises
/*addition=()=>{
    return new Promise((resolve,reject)=>{   
      console.log(6+7);  
      resolve();
        })
    }

subtraction=()=>{
    return new Promise((resolve,reject)=>{
        let errorHere=true;
        if(!errorHere)
        {
        setTimeout(()=>{console.log(10-8);},1000);
        resolve();
        }
        else
        reject("Error occured here");
        //console.log(10-8);  
        //resolve();
          

    });
}

multiplication=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log(4*5);},1000);
        resolve();
    })
}
addition()
.then(subtraction)
.then(multiplication).catch((err)=>{console.log("Exception : "+err)});*/



//------------------------------------------------

//Async and await
/*addition=(a,b)=>{
    let res = a+b;
    setTimeout(()=>{console.log(res);},2000);}
    
subtraction=(a,b)=>{
    let res = a-b;
    setTimeout(()=>{console.log(res); },1000);} 


multiplication=(a,b)=>{
    let res = a*b;
    setTimeout(()=>{console.log(res);},1000);}



async function menu()
{
    await addition(6,7);
    await subtraction(10,8);
    await multiplication(4,5);
}
//menu();

menu().then(()=>{
    setTimeout(()=>{console.log("Everything working fine");},1000);
});*/