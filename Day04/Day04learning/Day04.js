import React from "react";
import ReactDOM from "react-dom/client";
const element1 = <h1>hello coder army</h1>;
// JSX: JS ke expressin ko likha sakte ho (output chaiye bas)
// JS: ke statment ko nhi likh sakte

// props:{
//   name:"rohit negi",
//   age:20
//  };

function Greet(props){
    return <h1>Ram Ram bhaiya ji mera naam ye hai {props.name} aur mera age ye hai {props.age}</h1>;
};

const element2=<Greet name="jitendra yadav" age="20" />
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(element2);