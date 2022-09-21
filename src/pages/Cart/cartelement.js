import styled from "styled-components";

export const CartPage = styled.div`
    width: 100%;
    height: 100%;
    background: url(${require('../../assets/CheckoutBGG.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
   

  `;
export const CartCard = styled.div`
  width: 80%;
  margin: 20px auto 200px auto;
//   border: 1px solid black;
  box-shadow: 1px 1px black;
  background: rgba(225,225,225,0.8);
  border-radius: 20px;

  @media screen and (max-width: 1200px){
    width: 100%;
    font-size: .8rem;
  }
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

    @media screen and (max-width:1200px){
        width: 100%;    
    }
`;
export const Cartflexdiv = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px auto;
    // border: 1px solid green;

    @media screen and (max-width:960px){
        flex-direction: column;
        align-items: center;
        // flex-wrap:wrap;
        background: rgba(0,0,0,0.2);
        border-radius: 10px;
        padding: 10px;  
    }
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
export const CartButton = styled.div`
    padding: 8px 12px;
    margin: 20px;
    font-size: 1rem;
    // font-family:'Montserrat',sans-serif;
    border:1px solid #000;
    background:0;
    color:#000;
    cursor:pointer;
    transition:all .3s;
    border-radius: 15px;
    text-decoration: none;
    text-align: center;

&:hover{
    background: rgba(0,0,0,0.3);
    color:#fff;
    border:1px solid black;
}

@media screen and (max-width:960px){
    font-size: .8rem;
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
     width: 6rem;
     font-size: 16px;
     border-width: 0px;
     border-color: transparent;
     background-color: transparent;
     color: black;
     pointer-events: none;
     
`;
