import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HomeOuterDiv = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background:  linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ),url(${require('../../assets/bg3.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;

    @media screen and (max-width:960px){
        background:  linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ),url(${require('../../assets/bg7.jpg')}) no-repeat;
        background-size: cover;
        background-position:center;
    }
`;


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

        @media screen and (max-width: 1200px){
            width: 100%;
        }
`;

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
        @media screen and (max-width: 1200px){
            width: 80%;
            margin: auto;
            right: 0;
            // padding: 5px;
        }
`;


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
        font-size: 1rem;
        // top: 80px;
        
    }
`;

export const HeroP = styled.div`
        width: 100%;
        position:relative;
        font-size: 1.2rem;
        
        margin: 10px ;
        text-shadow: 1px 2px  black;
        @media screen and (max-width: 960px){
            font-size: 1rem;
            // top: 80px;
            
        }

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

     
`;


export const Promobutton = styled.button`
    // float:right;
    padding:8px 12px;
    margin:8px 0 0;
    font-size: 1.3rem;
    // font-family:'Montserrat',sans-serif;
    border:1px solid #fbae1a;
    background:0;
    color:#fbae1a;
    cursor:pointer;
    transition:all .3s;
    border-radius: 15px;
    text-decoration: none;

    &:hover{
        background: rgba(0,0,0,0.3);
        color:#fff;
        border:1px solid black;
    }

    @media screen and (max-width:960px){
        font-size: .8rem;
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
    background: linear-gradient( rgba(0, 0, 0, .86), rgba(0, 0, 0, 0.1) );

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
    background: RGBA(32,32,32,.5);
    padding: 20px 0;
    box-shadow: 0 0 8px #000;
    border-radius: 20px;
    flex-wrap: wrap;
    @media screen and (max-width:960px){
        width: 100%;
        flex-direction: column;
        margin: 0 0 40px 0;
        padding: 20px 0;
    }
`
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
        font-size: .8rem;
        width: 80%;
        margin: 0;
        
    }
`;

export const Aboutlogo = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    background: url(${require('../../assets/GXlogo.png')}) no-repeat;
    filter: invert(75%) sepia(86%) saturate(2521%) hue-rotate(347deg) brightness(108%) contrast(97%);
    background-size: contain;
    background-position:center;
    // border: 1px solid red;
    margin: 40px;
    

    @media screen and (max-width: 960px){
        width: 150px;
        height: 150px;
        margin: 10px;
    }

`;

export const Aboutbutton = styled(LinkR)`
        // float:right;
        padding: 8px 12px;
        margin: 20px;
        font-size: 1rem;
        // font-family:'Montserrat',sans-serif;
        border:1px solid #fbae1a;
        background:0;
        color:#fbae1a;
        cursor:pointer;
        transition:all .3s;
        border-radius: 15px;
        text-decoration: none;

        &:hover{
            background: rgba(0,0,0,0.3);
            color:#fff;
            border:1px solid black;
        }
        
        @media screen and (max-width:960px){
            font-size: .8rem;
        }
`;

export const Aboutdiv = styled.div`
        width: 90%;
        margin: 50px auto;
        // border: 1px solid green;
`