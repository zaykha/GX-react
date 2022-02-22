import styled from "styled-components";

export const ATCbutton = styled.button`
    position: relative;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    height: 60px;
    width: 210px;
    opacity: 1;
    background-color: rgba(0,0,0,0.0);
    border: 1px solid black;
    color: black;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px;

    &:hover{
        border: red 1px solid;
        color: red;
    }
`;

export const ATCspan = styled.span`
    color: black;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px;

  
`;