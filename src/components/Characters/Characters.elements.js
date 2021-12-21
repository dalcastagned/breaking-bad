import styled from 'styled-components'

export const ContainerCharacters = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    background: #fff;
    margin: 20px;
    width: 500px;
    border-radius: 10px;

    @media screen and (max-width: 600px){
        flex-direction: column;
        width: 240px;
    }
`
export const CharacterImage = styled.div`
    background: url(${(props) => props.background});
    background-size: cover; 
    background-repeat:no-repeat;
    background-position: top center;
    width: 200px;
    height: 250px;
    border-radius: 10px 0px 0px 10px;

    @media screen and (max-width: 600px){
        width: 240px;
        border-radius: 10px 10px 0px 0px;
    }
`
export const CharacterInfoContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const CharacterInfo = styled.p`
    padding: 10px;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media screen and (max-width: 600px){
        font-size: 16px;
        flex-direction: column;
    }
`
export const CharacterInfoBold = styled.span`
    font-weight: bold;
    padding-right: 5px;
`