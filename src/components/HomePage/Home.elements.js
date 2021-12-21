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