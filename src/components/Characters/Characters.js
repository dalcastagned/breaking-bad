import React, { useState, useEffect } from 'react'
import { getCharacters } from '../../services/Api';
import { SearchBar } from "../SearchBar/SearchBar";
import {
    ContainerImages,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'

const Characters = () => {

    const [character, setCharacter] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(0);
    const [filteredCharacter, setFilteredCharacter] = useState([]);

    useEffect(() => {
        getCharacters("characters")
            .then((data) => {
                setCharacter(data);
                setLoaded(true);
                console.log(data)
            })
            .catch(function (err) {
                setError(true);
                setLoaded(true);
            });
    }, []);

    if (error === true) {
        return (
            <ContainerImages>
                <ErrorImg src='https://i.ibb.co/GPBYtqK/error.png' alt='Error!' />
            </ContainerImages>
        )
    }
    else if (loaded === false) {
        return (
            <ContainerImages>
                <LoadingIMG src='https://i.ibb.co/CmhYx2h/loading-light.gif' alt='loading...' />
            </ContainerImages>
        )
    } else {
        return (
            <>
                <SearchBar
                    sourceList={character}
                    setList={setFilteredCharacter}
                    listSize={filteredCharacter.length}
                    placeholder={"Search Character"}
                />
                <div>
                    {filteredCharacter.map((character, index) => (
                        <div key={index} style={{ color: '#fff' }}>
                            <img src={character.img} alt={`${character.name} image`}/>
                            <div>
                                <p><span>Name: </span>{character.name}</p>
                                <p><span>Nickname: </span>{character.nickname}</p>
                                <p><span>Birthday: </span>{character.birthday}</p>
                                <p><span>Status: </span>{character.status}</p>
                                <p><span>Portrayed: </span>{character.portrayed}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
export default Characters
