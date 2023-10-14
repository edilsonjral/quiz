import React from 'react'
import Header from "../../components/header/header";
import { ContPerg, BoxCenter, BoxPerg, Container, Container2 } from "../Questions/styles";
import Categories from '../../components/divHomeCategory/categories';
import ButtonNext from '../../components/buttons/buttonNext';
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { MdHttp } from "react-icons/md";
import ButtonHome from '../../components/buttons/buttonHome';

const Home = () => {
  return (
    <>
    <div id='home'>
      <Container> 
        <Header conteudo={"Sobre"}/>

        <Container2>
          <h3>Escolha uma das opções abaixo e veja quantas perguntas você consegue responder corretamente entre 6 perguntas</h3>
          
          <BoxCenter>
            <Categories title={"React"} description={"Biblioteca front-end para criar interfaces de usuário em páginas web."} logo={<SiReact/>}/>
            <Categories title={"Javascript"} description={"Linguagem de programação interpretada estruturada, de script em alto nível"} logo={<SiJavascript/>}/>
            <Categories title={"Html"} description={"Área da programação que se dedica a criar a parte visual e interativa de um site"} logo={<SiHtml5/>}/>
            <Categories title={"Css"} description={"Mecanismo para adicionar estilos a uma página web, diretamente nas tags HTML"} logo={<SiCss3/>}/>
            <Categories title={"Http"} description={"Protocolo de comunicação utilizado para sistemas de informação de hipermídia"} logo={<MdHttp/>}/>
          </BoxCenter>

          <BoxCenter style={{margin: 20}}>
            <ButtonHome value={"Iniciar Quiz"} href={"/questions"}/>
          </BoxCenter>

        </Container2>

      </Container>
     </div>
     </>
  );
}

export default Home;