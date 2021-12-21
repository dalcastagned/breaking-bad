import React, { useState, useEffect } from 'react'
import { getCharacters } from '../../services/Api';
import { SearchBar } from "../SearchBar/SearchBar";
import {
    ContainerImages,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'
import {
    ContainerCharacters,
    ContainerCard,
    CharacterImage,
    CharacterInfoContainer,
    CharacterInfo,
    CharacterInfoBold
} from './Characters.elements'

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
                <ContainerCharacters>
                    {filteredCharacter.map((character, index) => (
                        <ContainerCard key={index}>
                            <CharacterImage background={character.img} />
                            <CharacterInfoContainer>
                                <CharacterInfo><CharacterInfoBold>Name: </CharacterInfoBold>{character.name}</CharacterInfo>
                                <CharacterInfo><CharacterInfoBold>Nickname: </CharacterInfoBold>{character.nickname}</CharacterInfo>
                                <CharacterInfo><CharacterInfoBold>Birthday: </CharacterInfoBold>{character.birthday}</CharacterInfo>
                                <CharacterInfo><CharacterInfoBold>Status: </CharacterInfoBold>{character.status}</CharacterInfo>
                                <CharacterInfo><CharacterInfoBold>Portrayed: </CharacterInfoBold>{character.portrayed}</CharacterInfo>
                            </CharacterInfoContainer>
                        </ContainerCard>
                    ))}
                </ContainerCharacters>
            </>
        )
    }
}
export default Characters
