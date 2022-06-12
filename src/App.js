import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import Paginado from './components/Paginado';


export const App = () => {
    const [url] = useState('https://rickandmortyapi.com/api/character')

    const [characters, setCharacter] = useState(null);

    useEffect(() => {
        getCharacters(url)
    }, [])

    const getCharacters = url =>{
         fetch(url, {
            method: 'GET', //Get, put, post, delete
            //body: data //post, put
            headers: {
                'Content-Type': 'application/json'
            }
         })
         .then(response => response.json())
         .then(data => setCharacter(data))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-primary text-center my-3 shadow">The Rick and Morty</h1>
                </div>
            </div>
            { !!characters && <Paginado getCharacters={getCharacters} info={characters?.info}/> }
            <div className="row">
                {
                    !!characters &&
                    characters.results.map(({image, name, gender, status}, index) => {
                        return(
                            <div className="col-md-6" key={index}>
                                <CharacterCard image={image} name={name} status={status} gender={gender}/>
                            </div>
                        )
                    })
                }
            </div>
            { !!characters && <Paginado getCharacters={getCharacters} info={characters?.info} /> }
        </div>
    )
}

//export default App;