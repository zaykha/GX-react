import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`

        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 3px solid red;
        width:100%;
        height: 60vh;
        // z-index: 100;
        top:-80px;
        margin-bottom:0;
        box-shadow: 1px 1px black;
        
`;

export const HeroOuterdiv = styled.div`
        width: 1200px;
        margin: auto;
        // border: 1px solid green;
        height: 30vh;
        position: relative;
        overflow: hidden;
`

export const Herodiv = styled.div`
        width: 50%;
        color: #fbae1a;
        height: 20vh;
        position:relative;
        right: -50%;
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
`


export const HeroPhrase = styled.h1`
        z-index: 1;
        
        font-size:3rem;
        position:relative;
       
        // margin: auto;
        text-shadow: 1px 2px black;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        
        @media screen and (max-width: 960px){
        font-size: 22px;
        top: 80px;
        font-size: 1.8rem;
    }
`;

export const HeroP = styled.div`
        width: 100%;
        position:relative;
        font-size: 1.2rem;
        
        margin: 10px ;
        text-shadow: 1px 2px  black;

`

export const HeroBgimg = styled.div`
    position: absolute;
    // border: 1px solid red;
    top:0px;
    margin-top:0;
    width:100%;
    height:60vh;
    background:  linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6) ),url(${require('../../assets/beefbg.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
    // clip-path: ellipse(84% 100% at 52.38% 0%);
    filter: blur(.8px);

        @media screen and (max-width: 960px){
            clip-path: ellipse(132% 100% at 55.74% 0%);
            background: url(${require('../../assets/Herobgmobile.jpg')}) no-repeat;
            background-size: cover;
            // background-position: center;
        }
`;


export const Promobutton = styled.button`
    border-radius: 15px;
    box-shadow: 0 0 8px rgb(207, 207, 207);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto 10px auto;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 0 8px #d9d4e7;
    width: 200px;
    height: 65px;
    background-color: #d9d4e7;
    animation-duration: 5s;
    cursor: pointer;
    transition: 0.5s;
    font-size: 20px;

    &:hover{
        border: none;
        padding: 15px;
        border-radius: 15px;
        box-shadow: inset 0 0 8px #f9f8fc;
        letter-spacing: 5px;
    }
`;


export const AboutContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top:-81px;
    color:#fbae1a;
    // border: 1px solid green;
    // background: rgba(0,0,0,.56);
    // z-index: 2;
    background: black;

    @media screen and (max-width:960px){
        flex-direction: column;
    }
`;

export const AboutInnerContainer = styled.div`
    width:1200px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 80px auto 0 auto;
    background: #202020;
    padding: 20px;
    box-shadow: 0 0 8px #000;
    border-radius: 20px;
`
// export const Aboutbg = styled.div`
//     position: absolute;
//     // border: 1px solid red;
//     margin-bottom: -20vh;
//     top:74vh;
//     width:100%;
//     height:60vh;
//     background: url(${require('../../assets/46769.jpg')}) no-repeat;
//     background-size: cover;
//     // filter: blur(1px);
    
// `;
export const HeaderUniversal = styled.div`
        font-size: 2rem;
        // border-bottom: 1px solid #fbae1a;
`

export const AboutPhrase = styled.div`

        width: 50%;
        z-index: 1;
        font-size:16px;
        position:relative;
        text-shadow: 1px 2px  black;
        // background: rgba(1,1,1,.3);
        text-align: center;
        

        @media screen and (max-width: 960px){
        font-size: 16px;
    }
`;

export const Aboutlogo = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    background: url(${require('../../assets/meatremovebg1.png')}) no-repeat;
    background-size: contain;
    background-position:center;
    // border: 1px solid red;
    margin: 40px;
    

    @media screen and (max-width: 960px){
        width: 150px;
    }

`;

export const Aboutbutton = styled.button`
    width: 200px;
    height: 65px;
    border-radius: 15px;
    border: none;
    box-shadow: 1px 1px black;

    :hover {
        cursor: pointer;
        box-shadow: 0.1px 0.1px black;
    }
`