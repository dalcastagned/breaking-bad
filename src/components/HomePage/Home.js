import React from 'react'
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

const Home = () => {
    return (
        <ContainerHome>
            <ContainerDescription>
                <HomeLogo src='https://i.ibb.co/PcZLcfs/logo.png' alt='Breaking Bad Logo' />
                <DescriptionHome>Made by a fan for the fans!</DescriptionHome>
            </ContainerDescription>
            <ContainerRandomDeath>
                <TextRandomDeath>Click here to find out about a random death!</TextRandomDeath>
                <ButtonRandomDeath>Death!</ButtonRandomDeath>
            </ContainerRandomDeath>
            <ContainerDeath>
                <ContainerWhoDied>
                    <Name>Name</Name>
                    <PictureWhoDied src='https://i.ibb.co/mXLKjHM/Walter-2008.png' alt='Who Died' />
                </ContainerWhoDied>
                <ContainerDeathInfo>
                    <InfoTitle>Cause</InfoTitle>
                    <InforDescription>Lorem Ipsum</InforDescription>
                    <InfoTitle>Responsible</InfoTitle>
                    <InforDescription>Lorem Ipsum</InforDescription>
                    <InfoTitle>Last Words</InfoTitle>
                    <InforDescription>Lorem Ipsum</InforDescription>
                </ContainerDeathInfo>
            </ContainerDeath>
        </ContainerHome>
    )
}

export default Home
