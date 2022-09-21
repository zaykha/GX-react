import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";



export const PromoOuterdiv = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: ${({ Promoprompt }) => (Promoprompt ? 'flex' : 'none')};
    flex-direction: column;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    z-index: 200;
    // transition: 3s ease-in-out;
    // opacity: ${({ Promoprompt }) => (Promoprompt ? '100%' : '0')};
    // right: ${({ Promoprompt })=>( Promoprompt ? '0' : '-100%')};
    
`;


export const Promodiv = styled(LinkS)`
    position: relative;
    width: 46rem;
    height: 31rem;
    z-index: 3;
    :hover{
        cursor:pointer;
        outline: 1px solid white;
        // box-shadow: 1px 1px 1px white;
    }
    // margin: 25% auto;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    // border: 6px solid red;
    // transform: translate(-50%, -50%);

    @media screen and (max-width:960){
       width: 100%;
        }
`;

export const PromocontentActive = styled(LinkS)`
    position: relative;
    width: 70%;
    // height: 31rem;
    display: flex;
    opacity:  1;
    transition-duration: 1s ease;
    transform: scale(1.08);
`;

export const Promocontent = styled.div`
    position: relative;
    width: 60%;
    left:0;
    // height: 31rem;
    display: flex;
    // opacity: 0;
    transition-duration: 1s;

    @media screen and (max-width:960px){
        width: 100%;
         }
`;

export const PromoImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    // z-index: 10;
    
`;

export const Linkbtn = styled(LinkS)`
    // float:right;
    padding:8px 12px;
    margin:8px 0 0;
    font-family:'Montserrat',sans-serif;
    border:1px solid #fbae1a;
    background:0;
    color:#fbae1a;
    cursor:pointer;
    transition:all .3s;
    border-radius: 15px;
    text-decoration: none;

    &:hover{
        background:#000;
        color:#fff;
        border:1px solid black;
    }
`