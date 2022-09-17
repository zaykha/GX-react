import styled from "styled-components";

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
    margin: 80px;
    
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
    background: black;

`;
export const Paracontainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    background: #202020;
    color: #fbae1a;
    margin: 80px auto;
    border-radius: 20px;

    @media screen and (max-width: 1200px){
        width: 100%;
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
    background: black;

`;

export const AbtcarCtner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // margin: auto;
    justify-content: center;
    align-items: center;
    background: black;
    position: relative;
    top:-80px;
    @media screen and (max-width: 1200px){
        width: 100%;
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
    background: #202020;
    // padding: 20px;
    color: white;
    border-radius: 20px;
    color: #fbae1a;


    @media screen and (max-width: 1200px){
        max-width: 80%;
        padding: 20px;
    
}

`;

export const InnerSustain = styled.div`
    width: 80%;
    margin: 60px auto;
`