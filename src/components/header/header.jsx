import styled from "styled-components";

/////////// Style /////////////
const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

export const Link = styled.a`
    display: block;
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #7685EE;
    color: #4150c7;
    &:hover{
        background-color: #ebecf4;
    }
`
///////////////////////////////

export default function Header({conteudo, path}) {
    return(
        <HeaderStyle>
            <h1>Quiz.com</h1>
            <Link href={path}>{conteudo}</Link>
        </HeaderStyle>
    )
}