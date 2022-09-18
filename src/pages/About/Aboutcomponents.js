import styled from "styled-components";

export const AboutOuterDiv = styled.div`
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

export const ImgAbt = styled.div`
    width: 100%;
    height: 20vh;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6) ),url(${require('../../assets/Aboutpics/aboutnavhero.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
    position: relative;
    top: -80px;
    // border: 1px solid red;
`;

export const InnerPara = styled.div`
    width: 80%;
    text-align: center;
    margin: 80px auto;

    @media screen and (max-width: 960px){
        margin: 10px;
        font-size: .8rem;
    }
    
`;

export const Abtpara = styled.div`
    width: 100%;
    position: relative;
    top: -80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: url(${require('../../assets/Aboutpics/199.jpg')}) no-repeat;
    // background-size: cover;
    // background-position:center;
    background: rgba(0,0,0,0.1);

    @media screen and (max-width:960px){
        background: 0;
    }

`;
export const Paracontainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    background: rgba(255,255,255,0.1);
    color: #fbae1a;
    margin: 80px auto;
    border-radius: 20px;

    @media screen and (max-width: 1200px){
        width: 100%;
        margin: 0;
        background: rgba(32,32,32,0.5)
    }
`;
export const AbtCarouselcontainer = styled.div` 
    // padding: 60px 0;
    // background: url(${require('../../assets/Aboutpics/195.jpg')}) no-repeat;
    // background-size: cover;
    // background-position:center;
    // border-top: 4px black solid;
    position: relative;
    width: 1200px;
    // margin: auto;
    // top:-80px;
    background: rgba(0,0,0,0.1);

    @media screen and (max-width: 1200px){
        width:100%;
        background:0;
    }

`;

export const AbtcarCtner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // margin: auto;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.1);
    position: relative;
    top:-80px;

    @media screen and (max-width: 1200px){
        width: 100%;
        background: 0;
    }
`;

export const AbtImgContainer = styled.img`
    position: relative;
    object-fill: cover;
    width: 480px;
    height: auto;
    border-radius: 5px;
`;

export const Sustain = styled.div`
    width: 1200px;
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    jusitfy-content: center;
    align-items: center;
    text-align: center;
    background: rgba(255,255,255,0.1);
    // padding: 20px;
    border-radius: 20px;
    color: #fbae1a;


    @media screen and (max-width: 1200px){
        max-width: 100%;
        padding: 20px 0;
        margin: 0;
        background: rgba(32,32,32,0.5);
        
    
}

`;

export const InnerSustain = styled.div`
    width: 80%;
    margin: 60px auto;

    @media screen and (max-width: 1200px){
        max-width: 80%;
        padding: 20px 0;
        margin: 0;
        font-size: .8rem;
    
}
`