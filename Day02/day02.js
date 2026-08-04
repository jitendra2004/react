const element1 = React.createElement('h1',{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello coder army");
const element2 = React.createElement('h2',{id:"second",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"blanchedalmond"}},"my name is jitendra yadav");
const div1 = React.createElement('div',{},[element1,element2]);
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(div1);