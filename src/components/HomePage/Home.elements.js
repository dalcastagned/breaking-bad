import styled from 'styled-components'

export const ContainerHome = styled.div`
    height: calc(100vh - 120px);
`

export const ContainerDescription = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const HomeLogo = styled.img`
    max-width: 260px;

    @media screen and (max-width: 600px){
        max-width: 150px;
    }
`

export const DescriptionHome = styled.h2`
    padding: 20px;
    color: #fff;
    font-size: 28px;
`

export const ContainerRandomDeath = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
`

export const TextRandomDeath = styled.h3`
    color: #fff;
`

export const ButtonRandomDeath = styled.button`
    margin: 20px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #000 url('https://i.ibb.co/2vrSd9t/bg.jpg') no-repeat center center/cover;
    color: #fff;
    font-weight: bold;
`
