//import and export
/*
const devloper = "Kabu";
const program =  "react";

function myName(){
    let name = "jaykabu";
    return name;
}

function myNames(){
    let names = "parth";
    return names;
}

export default devloper;
export {program,myName,myNames};

 */


//calculator

import React from 'react';
import {add, div, mult, sub} from "./Calc";

function Appp(){
    return (
        <>
            <ul>
                <li>sum of two no is {add(10, 10)}</li>
                <li>Sub of two no is {sub(10, 5)}</li>
                <li>Div of two no is {div(10, 3)}</li>
                <li>Mult of two no is {mult(10, 10)}</li>
            </ul>

        </>
    )
};

export default Appp;

