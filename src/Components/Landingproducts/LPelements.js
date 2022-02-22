import styled from "styled-components";


export const LPcontainer = styled.div`
    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;
    top: -80px;
    
    // border: 4px solid green;
    background: url(${require('../../assets/woodtable.jpg')});
    background-size: cover;
    background-position: center;
    // background: black;
    color: white;
    text-shadow: 1px 2px black;
    // gap: 0 0;
    clip-path: ellipse(150% 100% at 57% 100%);
    // padding: auto;

    @media screen and (max-width:1200px){
        background: url(${require('../../assets/bg8.jpg')});
        background-size: cover;
        background-position: center;
        clip-path: ellipse(300% 100% at 50% 100%);
        
    }
    
`;

export const Lpcontentcontainer = styled.div`
   
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // border: 1px solid red;
    width: 1200px;
    height: 100%;

    @media screen and (max-width:1200px){
      
        grid-template-columns: 1fr 1fr ;
       
        width: 100%;
       
    }
    @media screen and (max-width:768px){
      
        grid-template-columns: 1fr  ;
        width: 100%;
     
    }

`;  



export const LPcontent = styled.div`
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
    filter: brightness(.8);
    overflow: hidden;

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

export const PNAME = styled.h1`
    position: relative;
    color: yellow;
    
    text-shadow: 2px 2px 1px black;
`;