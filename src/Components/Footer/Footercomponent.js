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
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6) );
    // overflow:hidden;

    @media screen and (max-width: 1200px){
    //     background: url(${require('../../assets/Aboutpics/194.jpg')}) no-repeat;
    // background-size: cover;
    // background-position:center;
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
    align-content: center;
    justify-content: flex-start;
    text-align: center;
    width: 300px  ;
    // border: 1px solid blue;
    margin: 40px auto 40px auto;

    @media screen and (max-width: 960px){
       margin: 12px auto 12px auto;
    }
`;
export const Frow=styled.div`
    width: 80%;
    // border: 1px solid green;
    display: flex;
    justify-content: space-evenly;
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

export const FATag= styled(LinkR)`
    color:#fbae1a;
    text-decoration: none;

    :hover{
        color: white;
    }
`