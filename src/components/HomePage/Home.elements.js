import styled from 'styled-components'

export const ContainerHome = styled.div`
    min-height: calc(100vh - 120px);
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
    max-width: 220px;

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
    flex-direction: row;
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
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 1024px){
        &:hover {
            transform: scale(1);
        }
    }
`

export const ContainerDeath = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;    
    animation: fadein 2s; /* Padrão */
    -webkit-animation: fadein 2s; /* Webkit */
    -moz-animation: fadein 2s; /* Firefox */
    -ms-animation: fadein 2s; /* IE */

    @keyframes fadein {
        from { opacity: 0.3; }
        to { opacity: 1; } /* Padrão */
    }
    @-moz-keyframes fadein {
        from { opacity: 0.3; }
        to { opacity: 1; } /* Firefox */
    }
    @-webkit-keyframes fadein {
        from { opacity: 0.3; 
        to { opacity: 1; } /* Webkit */
    }
    @-ms-keyframes fadein {
        from { opacity: 0.3; }
        to { opacity: 1; } /* IE */
    }​
`

export const ContainerWhoDied = styled.div`
    text-align: center;
    padding: 10px 20px 0px 20px;
    width: 300px;   
    height: 415px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 680px){
        width: 100%;
        height: auto;
    }
`

export const Name = styled.h2`
    color: #fff;
    padding-bottom: 10px;
`

export const InfoTitle = styled.h3`
    color: #fff;
    padding: 40px 0 20px 0;
`

export const PictureWhoDied = styled.img`
    max-width: 240px;
`

export const ContainerDeathInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 10px 0px 20px;
    width: 300px;
    height: 415px;

    @media screen and (max-width: 680px){
        width: 100%;   
        height: auto;
        margin-bottom: 20px;
    }
`

export const InforDescription = styled.p`
    color: #fff;
`