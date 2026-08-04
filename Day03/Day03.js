import React from "react";
import ReactDOM from "react-dom/client";

// const element1 = React.createElement('h1',{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello coder army");
// const element2 = React.createElement('h2',{id:"second",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"blanchedalmond"}},"my name is jitendra yadav");
// const div1 = React.createElement('div',{},[element1,element2]);
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(div1);

// Jsx:Js Expression
const names = "jitendra yadav";
const obj={
    name:"mahendra yadav",
    age:20,
    phone_number:9023747394384
};
const element1 = <h1 id="first" className="rahul">hello coder army {names}</h1>;
const element2 = <h2 id="second" className="rahul">my name is jitendra yadav {obj.age} my name phone number is {obj.phone_number}</h2>;
const element3 = (<>{element1} {element2}</>)

// React component
// function based component

function meet(){
    return <h1>hello world</h1>;
};

const greet = function(){
    return <h2>i am living in thane</h2>;
};
const element4 = (<>{meet()} {greet()} {element3}</>);


const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(element4);