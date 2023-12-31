import styled from "styled-components";

/////////// Style /////////////
const Button = styled.button`
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  margin: 10px;
  background-color: #7685EE;
  cursor: pointer;
  &:hover {
    background-color: #6372e2;
  }
`;
///////////////////////////////

export default function ButtonNext({value, ...rootDOMAttributes}) {
    return(
        <Button {...rootDOMAttributes}>{value}</Button>
    )
}