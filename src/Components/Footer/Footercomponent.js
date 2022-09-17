import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Footercontainer=styled.div`
    position: relative;
    // border: 1px solid red;
    // top:-80px;
    align-content: center;
    justify-content: center;
    width: 100%;
    margin-top: 0;
    color:#fbae1a;
    // text-shadow: 1px 2px black;
    background: #202020;
    // overflow:hidden;

    @media screen and (max-width: 1200px){
        background: url(${require('../../assets/Aboutpics/194.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
    }
`;
export const Ftopcompartment=styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // align-content: center;
    // justify-content: center;
    width: 1200px;
    margin: auto;
    z-index: 3;
    
    @media screen and (max-width: 1200px){
        width: 100%;
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 960px){
        grid-template-columns: 1fr;
    }
`;
export const Fcontent=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    // margin-left: 80px;
    // align-content: center;
    // justify-content: center;
    text-align: center;
    width: 300px  ;
    // border: 1px solid blue;
    margin: 40px auto 40px auto;

    @media screen and (max-width: 960px){
       margin: 12px auto 12px auto;
    }
`;
export const Frow=styled.div`
    display: flex;
    margin: auto;
`;
export const FCopyright=styled.div`
    position: relative;
    width: 100%;
    background: black;
    
    color: white;
    text-align: center;
    z-index: 4;

`;

export const Fbg= styled.img`
    position: absolute;
    width: 100%;
    height: 450px;
    object-fit: cover;
    // top:-130px;
    z-index: 2;
    // clip-path: ellipse(117% 100% at 50% 100%);
    // box-shadow: 10px 10px black;
    overflow: hidden;

    @media screen and (max-width: 1200px){
        display: none;
    }
    
`;

export const FATag= styled(LinkR)`
    color:#fbae1a;
    text-decoration: none;
`