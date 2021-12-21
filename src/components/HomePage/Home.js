import React from 'react'
import {
    ContainerHome,
    ContainerDescription,
    HomeLogo,
    DescriptionHome
} from './Home.elements';
import RandomDeath from '../RandomDeath/RandomDeath';

const Home = () => {
    return (
        <ContainerHome>
            <ContainerDescription>
                <HomeLogo src='https://i.ibb.co/PcZLcfs/logo.png' alt='Breaking Bad Logo' />
                <DescriptionHome>Made by a fan for the fans!</DescriptionHome>
            </ContainerDescription>
            <RandomDeath />
        </ContainerHome>
    )
}

export default Home
