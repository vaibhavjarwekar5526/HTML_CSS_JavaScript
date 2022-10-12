
let input = window.prompt("Enter any number")
const counterReducer=(state=input,action)=>
{
    switch(action.type){
        case "INCREMENT":
            return parseInt(state)+action.value;
        case "DECREMENT":
            return parseInt(state)-action.value;
        default:
            return state;
    }
}

export default counterReducer;