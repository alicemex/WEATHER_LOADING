import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Pokedex = ({background}) => {


    const [pokemon, setPokemon] = useState({});

    useEffect(()=>{
        axios.get(` https://pokeapi.co/api/v2/pokemon/ditto`)
        .then(res=>(setPokemon(res.data)));
    },[]);

 
    return (
        <div className="Card"  style={{background}}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.front_default}></img>
           <ul>
               <li> <p>Weight: {pokemon?.weight}</p></li>
               <li><p>Weight: {pokemon?.height}</p></li>
               <li>Type: {pokemon.types?.[0].type.name}</li>
           </ul>
            <button> Random pokemon</button>
        </div>
    );
};

export default Pokedex;