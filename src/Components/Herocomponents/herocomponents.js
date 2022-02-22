import styled from "styled-components";

export const HeroContainer = styled.div`

        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 3px solid red;
        width:100%;
        height: 90vh;
        // z-index: 100;
        top:-80px;
        margin-bottom:0;
        
`;

export const ImgHero = styled.img`

    position: absolute;
    top:11vh;
    width: 480px;
    z-index: 0;
    @media screen and (max-width: 1024px){
        width: 300px;
    }
    
`


export const HeroPhrase = styled.h1`
        z-index: 1;
        color: white;
        font-size:46px;
        position:absolute;
        top:60px;
        text-shadow: 1px 2px  black;
       
    
        @media screen and (max-width: 960px){
        font-size: 22px;
        top: 80px;
        font-size: 1.8rem;
    }
`;

export const HeroBgimg = styled.div`
    position: absolute;
    // border: 1px solid red;
    top:0px;
    margin-top:0;
    width:100%;
    height:90vh;
    background: url(${require('../../assets/Herobackground.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
    clip-path: ellipse(84% 100% at 52.38% 0%);
    filter: blur(.8px);

        @media screen and (max-width: 960px){
            clip-path: ellipse(132% 100% at 55.74% 0%);
            background: url(${require('../../assets/Herobgmobile.jpg')}) no-repeat;
            background-size: cover;
            // background-position: center;
        }
`;


export const Promobutton = styled.button`
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 8px rgb(207, 207, 207);
    position: absolute;
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
height: 60vh;
top:-80px;
// border: 1px solid green;
background: rgba(0,0,0,.56);
z-index: 2;
background: url(${require('../../assets/46769.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
    // filter: blur(1px);

@media screen and (max-width:960px){
    flex-direction: column;
}
`;

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

export const AboutPhrase = styled.div`

        z-index: 1;
        color: white;
        font-size:20px;
        position:relative;
        text-shadow: 1px 2px  black;
        background: rgba(1,1,1,.3);
        @media screen and (max-width: 960px){
        font-size: 16px;
    }
`;

export const Aboutlogo = styled.img`
    position: relative;
    width: 240px;

    @media screen and (max-width: 960px){
        width: 150px;
    }

`;