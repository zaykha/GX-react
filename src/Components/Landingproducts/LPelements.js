import styled from "styled-components";


export const LPcontainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    top: 17vh;
    // border: 4px solid green;
    background: url(${require('../../assets/woodtable.jpg')});
    background-size: cover;
    color: white;
    text-shadow: 1px 2px black;
    border-top: 4px solid black;
    border-bottom: 4px solid black;
`;

export const LPcontent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:25%;
    height: 300px;
    margin-left: 30px;
    // border: 1px solid red;
    cursor: pointer;
    background: #2a2a2a;
    border-radius: 10px;
    filter: brightness(.8);

    &:hover{
        box-shadow: 1px 2px 1px black;
        filter:  brightness(1);
    }

`;

