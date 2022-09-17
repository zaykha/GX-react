import styled from "styled-components";

export const CartPage = styled.div`
  width: 100%;
  height: auto;
  background: url(${require('../../assets/CheckoutBGG.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;

  `;
export const CartCard = styled.div`
  width: 60%;
  margin: 20px auto 200px auto;
//   border: 1px solid black;
  box-shadow: 1px 1px black;
  background: rgba(225,225,225,0.95);
  border-radius: 20px;

  `;
export const CartMaincontainer = styled.div`
    width: 80%;
    // border: 1px solid red;
    margin: 40px auto;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width:1200px;){
        width: 100%;
    }
`;
export const Cartflexdiv = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px auto;
    // border: 1px solid green;
`;
export const CartSummarydiv = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px auto;
`;
export const CartTotaldiv = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
    border-top: 2px solid gray;
    padding-top: 6px;
    color: green;
    font-size: 1.2rem;
    font-weight: bold;
`;
export const CartForm = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
`;
export const CartInput = styled.input`
    margin: 10px;
    background: transparent;
    border: none;
    height: 30px;
    border-bottom: 1px solid white;
`;
export const CartTextarea = styled.textarea`
    width: 80%;
    margin: 20px auto;
    height: 200px;
    background: transparent;
    border: none;
`;
export const CartButton = styled.button`
    width: 300px;
    height: 40px;
    margin: 20px auto;
    border-radius: 6px;
    background: transparent;
    // color: white;
    // border: 1px solid white;
    :hover{
        cursor: pointer;
      
    }
    @media screen and (max-width:1200px;){
        width: 60%;
        margin: 0;
    }
`;

export const AdjustBtn = styled.button`
    width: 40px;
    border-radius: 10%;
    margin: 10px;
    background: transparent;
    border: 1px solid black;
    // box-shadow: 1px 1px 1px black;
    :hover{
        color: white;
        background: black;
        cursor: pointer;
    }
`; 

export const Cartinput = styled.input`
    
    // padding: 5px;    
     font-size: 16px;
     border-width: 0px;
     border-color: transparent;
     background-color: transparent;
     color: #000000;
     pointer-events: none;
     
`;
