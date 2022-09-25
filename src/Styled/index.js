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
  font-size : 20px;
  font-weight :500;
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
  margin-left : 8px;
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
  height : 77vh;
  overflow : auto;
  justify-content: center;
  gap: 12px;
  min-width : 70%;
  max-height: 77vh;
  background-color: #ffff;
  border: 1px solid gray;
  border-radius: 4px;
  @media only screen and (max-width: 800px) {
      min-width : 48%;
  }
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
export const AnimeCard = styled.div`
margin : 1em;
width : 12em;
background-color : #fff;
height : max-content;
border : 1px solid #f2e6e6;
border-radius : 0px 0px 4px 4px;
`
export const SearchClass = styled.div`
display: flex;
justify-content: center;
align-items: center;
border : 1px solid gray;
border-radius : 4px;
`
export const RemoveButton = styled.button`
  width: 74px;
  background: none;
  font-size: 12px;
  border: 2px solid #cdcdcd;
  padding: 5px 12px;
  border-radius: 4px;
  color: red;
`
 export const WatchItemContainer= styled.div`
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  width: 30%;
  background: #fff;
  padding: 16px;
  min-width: 206px;
  display : flex;
  flex-direction : row;
  margin-bottom: 8px
`
export const WatchItemDetails= styled.div`
margin-left: 36px;
`

