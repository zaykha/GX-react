import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const OuterlayerSubmit = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    color: #fbae1a;
    z-index: 200;
    display: flex;
    align-item: center;
    justify-content: center;
`;

export const SubmitPrompt = styled.div`
    width: 58%;
    height: auto;
    background: rgba(0,0,0,0.6);
    margin: auto;
    pading: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PSUL = styled.div`
    width: 60%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid grey;
    margin: 0.1rem auto 0.1rem auto;
`;

export const PSLI = styled.div`
    list-style: none;
    color: white;
    margin-bottom: 1rem;
`;

export const PSp = styled.p`
    font-size: 0.8rem;
    margin: 0 auto 0.1rem auto;
    padding: 0;
    color: white;
    text-align: center;
`;

export const CancelBtn = styled.div`
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

export const ConfirmBtn = styled(LinkR)`
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

export const Flexdiv = styled.div`
    display: flex;
`
