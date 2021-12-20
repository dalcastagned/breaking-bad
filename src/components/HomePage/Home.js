import React from 'react'
import {
    ContainerHome,
    ContainerDescription,
    HomeLogo,
    DescriptionHome,
    ContainerRandomDeath,
    TextRandomDeath,
    ButtonRandomDeath
} from './Home.elements';

const Home = () => {
    return (
        <ContainerHome>
            <ContainerDescription>
            <HomeLogo src='https://i.ibb.co/PcZLcfs/logo.png' alt='Breaking Bad Logo'/>
            <DescriptionHome>Made by a fan for the fans!</DescriptionHome>
            </ContainerDescription>
            <ContainerRandomDeath>
                <TextRandomDeath>Click here to find out about a random death!</TextRandomDeath>
                <ButtonRandomDeath>Death!</ButtonRandomDeath>
            </ContainerRandomDeath>
        </ContainerHome>
    )
}

export default Home
