import React from 'react';


const MyComponent = ({name, age, isMarried}) => {
    return ( 
    < div className="header">
           <ul>
               <li> Nombre: {name}</li>
               <li>   Edad: {age}</li>
               <li>  Estado Civil: {isMarried?"Casado":"Soltero"}</li>
           </ul>
          
           
        </div>
    );
};

export default MyComponent;