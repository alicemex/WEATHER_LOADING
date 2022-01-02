import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Led = () => {

//declarar el estado del foco
const [darkMode, setdarkMode] = useState(true);
const [user, setUser] = useState("");
const [index, setIndex] = useState(1);


//hacer el toggle
const toggle = () =>{
    setdarkMode(!darkMode);

}

const setColor= ()=>{
    var focoColor = {
        color: "orange"
    };
    
    if(darkMode){
        focoColor={backgroundColor: "blue"}
    }else{
        focoColor={backgroundColor: "red"}
    }
    return focoColor
}


//funcion recursiva del use State
const handleUser = () => {
    const getNumber = ()=> Math.floor(Math.random()*10)+1;
    setIndex(getNumber());
 
  };
 


useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${index}`)
    .then(res => setUser(res.data) )
    .catch(error => console.log(error));   
}, [index]);



    return (
        < div className="background-foco"> 
        <div  className="foco" style={setColor()}><button onClick={toggle} >switch</button></div>
         <div className="Card">{user.name}<br></br>{user.email}
         <br></br><button onClick={(handleUser)}>random user</button></div>
         </div>
    );
};

export default Led;