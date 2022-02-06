import styled from "styled-components";

export const HeroContainer = styled.div`

        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 1px solid red;
        height: 90vh;
        
`;

export const ImgHero = styled.img`

    position: absolute;
    top:120px;
    width: 480px;
    z-index: 2;
    @media screen and (max-width: 960px){
        width: 50%;
    }
    
`


export const HeroPhrase = styled.div`
        z-index: 1;
        color: white;
        font-size:46px;
        position:absolute;
        top:40px;
        text-shadow: 1px 2px  black;
    
        @media screen and (max-width: 960px){
        font-size: 22px;
    }
`;

export const HeroBgimg = styled.div`
    position: absolute;
    // border: 1px solid red;
    top:-150px;
    width:100%;
    height:80vh;
    background: url(${require('../../assets/Herobackground.jpg')}) no-repeat;
    background-size: cover;
    filter: blur(.8px);
`;


export const Promobutton = styled.button`
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 8px rgb(207, 207, 207);
    position: relative;
    top: 15px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 0 8px #d9d4e7;
    width: 200px;
    height: 65px;
    background-color: #d9d4e7;
    animation-duration: 5s;
    cursor: pointer;

    &:hover{
        border: none;
        padding: 15px;
        border-radius: 15px;
        box-shadow: inset 0 0 8px #f9f8fc;
    }
`;

export const PromobuttonAtag = styled.a`
    font-size: 20px;
    display: block;
    text-decoration: none;
    color:#0e172c;
    transition: 1.5s;

    &:hover{
        letter-spacing: 5px;
    }
`;

export const AboutContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 20vh;
top:0px;
// border: 1px solid green;
background: rgba(0,0,0,.56);
z-index: 2;


@media screen and (max-width:960px){
    flex-direction: column;
}
`;

export const Aboutbg = styled.div`
    position: absolute;
    // border: 1px solid red;
    margin-bottom: -20vh;
    top:74vh;
    width:100%;
    height:60vh;
    background: url(${require('../../assets/bg5.jpg')}) no-repeat;
    background-size: cover;
    filter: blur(1px);
`;

export const AboutPhrase = styled.div`

        z-index: 1;
        color: white;
        font-size:20px;
        position:relative;
        text-shadow: 1px 2px  black;
        
        @media screen and (max-width: 960px){
        font-size: 16px;
    }
`;