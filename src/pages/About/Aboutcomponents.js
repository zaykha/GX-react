import styled from "styled-components";

export const Abtpara = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${require('../../assets/Aboutpics/199.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;

`;
export const Paracontainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 60px;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`;
export const AbtCarouselcontainer = styled.div` 
    padding: 60px 0;
    background: url(${require('../../assets/Aboutpics/195.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
    border-top: 4px black solid;

`;

export const AbtcarCtner = styled.div`
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1200px){
        width: 100%;
    }
`;

export const AbtImgContainer = styled.img`
    position: relative;
    object-fill: fit;
    width:480px;
    height: 270px;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 2px 2px black;
`;

export const SustainCtner = styled.div`
border-bottom: 4px solid black;
padding: 60px 0;
background: url(${require('../../assets/Aboutpics/abtcar.jpg')}) no-repeat;
background-size: cover;
background-position:center;
border-top: 4px black solid;
`

export const Sustain = styled.div`
width: 1200px;
margin: 60px auto;
display: flex;
flex-direction: column;
jusitfy-content: center;
align-items: center;
text-align: center;
background: rgba(0,0,0,0.3);
padding: 20px;
color: white;


@media screen and (max-width: 1200px){
    max-width: 80%;
    padding: 20px;
    
}

`;