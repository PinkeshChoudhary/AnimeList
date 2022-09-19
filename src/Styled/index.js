import styled from "styled-components";

export const Nav = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 100%;
  justify-content : center;
  align-items : center;
  color : black;
`;

export const Title = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  text-shadow: 1px 0px 0px lightgrey;
  color: black;
  margin: 10px;
  font-weight: 400;
  margin-right: auto;
`;

export const Button = styled.button`
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  height: 30px;
  width: 150px;
  &:hover {
    border: 2px solid gray;
    font-size: 18px;
  }
`;

export const AnimeCtnr = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10%;

  justify-content: center;
  gap: 12px;
`
export const LoaderComponent = styled.div`
width: 100%;
  height: auto;
  background-color: rgb(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const AnimeList = styled.div`
margin : 1em;
width : 15em;
background-color : #fff;

`
export const SearchClass = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding : 10px;
`