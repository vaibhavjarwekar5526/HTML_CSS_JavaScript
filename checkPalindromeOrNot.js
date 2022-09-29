function checkingPalindrome(str){
    let left=0, right=str.length-1;

    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++, right--;
    }

    return true;
}

function runProgram(input){
    let str = input;
    
    if(checkingPalindrome(str)){
        console.log("Given string is Palindrome");
    }
    else{
        console.log("Given string is not a Palindrome");
        
    }

}

runProgram(`madam`);