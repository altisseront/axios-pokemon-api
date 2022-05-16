import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
            setPokemonList(response.data.results);
        })
        .catch(err => {
            console.log(err)
        })}

    return(
        <>
        <div>
            <button onClick={getPokemon}>Click to see them all!!</button>
        </div>
        {
            pokemonList.map((pokemon, idx) => {
                return(
                    <div key={idx}>
                        <h3>{pokemon.name}</h3>
                    </div>
                )
            })

        }
        
        </>
    )
    
}
export default Pokemon