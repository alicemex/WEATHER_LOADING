import React from 'react';


const Card = ({titulo, item1, item2, item3, background}) => {

    const  showTitle = (titulo) => alert(titulo);

    return (
        <div className='Card' style={{background}} onClick={ () => showTitle(titulo)}>
            <h3>{titulo}</h3>
            <p>{item1}</p>
            <p>{item2}</p>
            <p>{item3}</p>

        </div>
    );
};



export default Card;