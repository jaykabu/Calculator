// import React from 'react';
// import ReactDom from 'react-dom';

/* simple meg pass

// ReactDom.render(<React.Fragment>
//     <h1> Hello world. </h1>
//     <p> React </p>
//     <h2> REACT </h2> </React.Fragment> , document.getElementById('root'));

*/

/*  challenge

ReactDom.render(<React.Fragment>
  <h1> Netflix </h1>
 <p> list of best five serise </p>
  <ol>
    <li> dark</li>
    <li> asur</li>
    <li> familyman</li>
    <li> stranger</li>
    <li> ironman </li>
  </ol>

</React.Fragment> , document.getElementById('root'));

*/

/*
//Expression
const fname = "Jay";
ReactDom.render(<>
  <h1> My name is {fname}</h1>
  <p>JavaScript Expression. my lucky number is {Math.random()}</p>
</>
    ,document.getElementById('root'));

 */

// import React from 'react';
// import ReactDom from  'react-dom';
// const fname = 'jay';
// const lname = 'kabutarwala';
// const age = 23;
// let obj = {
//   name:"jay",
//   age:23
// };
// ReactDom.render(<>
//   <h1>my name is {obj.age}</h1>
//   <h1>i am {fname} {lname}</h1>
//   <h1>i am {fname}{lname} and {age} year old</h1>
//    </>
//     ,document.getElementById('root'));

//Import Export
/*
import React from 'react';
import ReactDom from 'react-dom';
import devloper,{program,myName,myNames} from "./Appp";

ReactDom.render(
    <>
      <ol>
        <li> Jay</li>
          <li>{devloper}</li>
          <li>{program}</li>
          <li>{myName()}</li>
          <li>{myNames()}</li>
      </ol>
      </>,document.getElementById('root')
);

 */

//calculator

import React from 'react';
import ReactDom from 'react-dom';
import Appp from './Appp';
// import  {add, div, mult, sub} from './Calc.jsx';

ReactDom.render(
    <Appp/>, document.getElementById('root')
);
