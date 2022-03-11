import styled from "styled-components";

export const CartMaincontainer = styled.div`
    width: 1200px;
    border: 1px solid red;
    margin: auto;

    @media screen and (max-width:1200;){
        width: 100%;
    }
`;
export const Cartflexdiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border: 1px solid green;
`;
export const CartSummarydiv = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;
export const CartTotaldiv = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border: 1px solid blue;
`;