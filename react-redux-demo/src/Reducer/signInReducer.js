const signInReducer=(state="please sign in",action)=>
{
    switch(action.type){
        case 'SIGNIN':
            return state="Signed In";
        default:
            return state;
    }
}

export default signInReducer