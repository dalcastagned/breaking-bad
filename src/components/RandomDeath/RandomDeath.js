import React, { useEffect, useState } from 'react'
import { getRandomDeath } from '../../services/Api'
import {
    ContainerImagesRandomDeath,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'
import {
    ContainerRandomDeath,
    TextRandomDeath,
    ButtonRandomDeath,
    ContainerDeath,
    ContainerWhoDied,
    InfoTitle,
    PictureWhoDied,
    ContainerDeathInfo,
    InforDescription,
    Name
} from './RandomDeath.elements'

const RandomDeath = () => {

    const [randomDeath, setRandomDeath] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false);

    useEffect(() => {
        getRandomDeath("random-death")
            .then((data) => {
                setRandomDeath(data);
            })
            .catch(function (err) {
                setError(true);
            });
    }, []);

    const getNewRandomDeath = () => {
        setLoaded(false);
        setError(false);
        getRandomDeath("random-death")
            .then((data) => {
                setRandomDeath(data);
            })
            .catch(function (err) {
                setError(true);
            });
    }

    const imageLoaded = () => {
        setLoaded(true);
    }

    return (
        <>
            <ContainerRandomDeath>
                <TextRandomDeath>Click here to find out about a random death!</TextRandomDeath>
                <ButtonRandomDeath onClick={getNewRandomDeath}>Death!</ButtonRandomDeath>
            </ContainerRandomDeath>
            {error ?
                <ContainerImagesRandomDeath>
                    <ErrorImg src='https://i.ibb.co/GPBYtqK/error.png' alt='Error!' />
                </ContainerImagesRandomDeath>
                :
                <>
                    <ContainerImagesRandomDeath style={loaded ? { display: 'none' } : {}}>
                        <LoadingIMG src='https://i.ibb.co/CmhYx2h/loading-light.gif' alt='loading...' />
                    </ContainerImagesRandomDeath>
                    <ContainerDeath style={loaded ? {} : { display: 'none' }}>
                        <ContainerWhoDied>
                            <Name>{randomDeath.death}</Name>
                            <PictureWhoDied src={randomDeath.img} alt='Who Died' onLoad={imageLoaded} />
                        </ContainerWhoDied>
                        <ContainerDeathInfo>
                            <InfoTitle>Cause</InfoTitle>
                            <InforDescription>{randomDeath.cause}</InforDescription>
                            <InfoTitle>Responsible</InfoTitle>
                            <InforDescription>{randomDeath.responsible}</InforDescription>
                            <InfoTitle>Last Words</InfoTitle>
                            <InforDescription>{randomDeath.last_words}</InforDescription>
                        </ContainerDeathInfo>
                    </ContainerDeath>
                </>
            }
        </>
    )
}

export default RandomDeath
