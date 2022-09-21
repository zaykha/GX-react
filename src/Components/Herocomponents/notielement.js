import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Notidiv = styled.div`
    position: fixed;
    display: ${({ Purchasednoti }) => (Purchasednoti ? 'none' : 'flex')};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    top:0;
    left:0;
    background: rgba(0,0,0,.5);
    z-index: 100;
`;

export const Noticard = styled.div`
    width: 60%;
    height: auto;
    padding: 40px;
    background: rgba(0,0,0,0.9);
    color: #fbae1a;
    font-size: 1rem;
    margin: auto;
    text-align: center;
`;
export const Notip = styled.p`
    margin: 10px auto;
`;

export const Btndiv = styled.div`
    width: 40%;
    padding: 20px;
    margin:  30px auto 10px auto;
`;

export const NotiBtn = styled(LinkR)`
padding: 8px 12px;
margin: 20px;
font-size: 1rem;
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

export const NotiSpan = styled.span`
    color: green;
`