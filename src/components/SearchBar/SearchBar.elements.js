import styled from "styled-components";

export const StyledSearchBar = styled.input`
  background: #fff;
  border: 2px solid #fff;
  height: 40px;
  display: block;
  border-radius: 10px;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  outline:0;
  width: 400px;
  margin-top: 40px;

    @media screen and (max-width: 420px){
        width: 300px;
    }

    @media screen and (max-width: 320px){
        width: 260px;
    }
`

export const SearchBarText = styled.p`
  font-size: 22px;
  margin-top: 10px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`