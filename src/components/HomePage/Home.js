import React, { useState, useEffect } from 'react'
import {
    ContainerHome,
    ContainerDescription,
    HomeLogo,
    DescriptionHome,
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
} from './Home.elements';
import {
    ContainerImagesRandomDeath,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'
import { getRandomDeath } from '../../services/Api'

const Home = () => {

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
        <ContainerHome>
            <ContainerDescription>
                <HomeLogo src='https://i.ibb.co/PcZLcfs/logo.png' alt='Breaking Bad Logo' />
                <DescriptionHome>Made by a fan for the fans!</DescriptionHome>
            </ContainerDescription>
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
        </ContainerHome>
    )
}

export default Home
