import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const LPcontainer = styled.div`
    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;
    top: -82px;
    text-shadow: 1px 2px black;
    background: 0;
    

    @media screen and (max-width:1200px){
        width:100%;   
        
    }
    
`;

export const LPInnerContainer = styled.div`
    width:1200px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border-top: 1px solid #fbae1a;
    margin: 80px auto 40px auto;
    background: rgba(32,32,32,0.5);
    box-shadow:  0 0 8px #000;;
    padding: 20px 0;
    border-radius: 20px;

    @media screen and (max-width:1200px){
        width:100%;
        margin: 0;
        padding: 0;
        // clip-path: ellipse(300% 100% at 50% 100%);
        
    }

`

export const Lpcontentcontainer = styled.div`
   
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // border: 1px solid red;
    width: 1000px;
    height: 100%;

    @media screen and (max-width:1200px){
      
        grid-template-columns: 1fr 1fr ;
       
        width: 100%;
       margin:0;
    }
    @media screen and (max-width:768px){
      
        grid-template-columns: 1fr  ;
        width: 100%;
        margin: 0;
     
    }

`;  



export const LPcontent = styled(LinkR)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:240px;
    height: 200px;
    margin: 40px auto;
    // border: 1px solid red;
    cursor: pointer;
    background: #2a2a2a;
    border-radius: 10px;
    filter: brightness(.5);
    overflow: hidden;
    text-decoration: none;

    &:hover{
        
        box-shadow: 1px 2px 1px black;
        filter:  brightness(1);
    }
    
    @media screen and (max-width: 768px){
        width: 240px;
        height: 180px;
        margin: 40px auto;
    }

  
`;
export const PImgpl = styled.img`
    position:absolute;
    object-fit:cover;
    width:100%;
    height:100%;
  
`;

export const PNAME = styled.div`
    position: relative;
    color: #fbae1a;
    font-size: 2rem;
    text-shadow: 2px 2px 1px black;
`;