import React from 'react';
import './App.css';
import Student from './Components/Student';
import Student2 from './Components/Student2';
import Student3 from './Components/Student3';

function App() {

  const numPalindromeCheck = (number) => {
    let rem, temp=number, final = 0;
    
    while (number > 0) {
      rem = number % 10;
      number = parseInt(number / 10);
      final = final * 10 + rem;
    }
  
    if(final===temp)
      return "Given Number is Palindrome";
      else return "Given Number is not a Palindrome";
  }

  let obj1 = {
    name: "XYZ",
    age: "16",
    class: "10th"
  }

  let obj2={
    name: "ABC",
    age: "18",
    class: "12th"
  }

  return (
    <div className="App">
      <h1>{numPalindromeCheck(313)}</h1>
      <hr/>
      <hr/>
      <Student obj={obj1}/>
      <Student2 obj={obj2} />
      <Student3 name="LMN" age="14" section="8th" />
    </div>
  );
}

export default App;
