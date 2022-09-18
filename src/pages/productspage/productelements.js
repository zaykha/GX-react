import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Pdiv= styled.div`
    width: 100%;
    background: linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) );
`
export const BGimg = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) ),url(${require('../../assets/Herobackground.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
`;
export const PSection= styled.section`
    width: 100%;
    margin: 0 auto;
    max-width: 1170px;
    padding: 5rem 0;
    background: 0;
    position:relative;
    top:-120px;

    @media screen and (min-width: 992px) {
        width: 95vw;
    }
`;

export const PTitle= styled.div`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
    color: white;
`;

export const PUnderline = styled.div`
    width: 7rem;
    height: 0.25rem;
    background: #c59d5f;
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
`;
export const Pcatacontainer = styled.div`
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 960px){
        display: none;

    }
`;
export const PButtonfilter = styled.button`
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: #c59d5f;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;

    &:hover{
        background: #c59d5f;
        color: #fff;
    }
`;


export const PSectioncenter = styled.section`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    gap: 3rem 2rem;
    justify-items: center;
    

    @media screen and (min-width:1200px){
        width: 95vw;
        grid-template-columns: 1fr 1fr;
    }
`;
export const PArticlemenuitem = styled.article`
    display: grid;
    width: 480px;
    height: 153px;
    color: #fbae1a;

    border-radius: 5px;
    background: url(${require('../../assets/bg11.jpg')}) no-repeat;
    background-size: cover;
    background-position:center;
    grid-template-columns: 225px 1fr;
        gap: 0 1.25rem;

    @media screen and (max-width: 768px){
        grid-template-rows: 1fr 1fr ;
        grid-template-columns: 244px;
        gap: 1rem 2rem;
      width:243px;
      height:auto;
      background: url(${require('../../assets/bg8.jpg')}) no-repeat;
      background-size: cover;
      background-position:center;
      
      text-shadow: 1px 1px 1px black;
    }
`;

export const PIMGphoto = styled.img`
    object-fit: cover;
    height: 150px;
    width: 240px;
    border: 1px solid black;
    box-shadow:2px 2px black;
    border-radius: 0.25rem;
    display: block;

    // @media screen and (min-width:768px){
    //     height: 175px;
    // }

    // @media screen and (min-width: 1200px){
    //     height: 150px;
    // }
`;

export const Pdiviteminfo = styled.div`
    display: flex;
    flex-direction: column;
    
    // border-bottom: 0.5px dotted hsl(210, 22%, 49%);
    margin-bottom: 0.5rem;
    // border: 1px solid blue;

`;
export const PH4item = styled.h4`
    margin-left: 0.5rem;
    width: 50%;
    color: #fbae1a;
   
`;
export const Pheader = styled.header`
    display: flex;
    margin: 20px 10px;
    box-sizing: border-box;
    height: 40px;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
`;
export const PH4price = styled.h4`
    margin-left: 0.8rem;
    color: #c59d5f;
    display: flex;
    
`;
export const Ppitemtext = styled.p`
    // border: 1px solid green;
    margin-bottom: 0;
    // padding-top: 1rem;
`;
export const PAddtocart = styled.button`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;
export const PBTNcontainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #FFF;
    padding:  40px 0px;
    width: 240px;

    &:hover{
        text-decoration: none;
    }
`;
export const PAnc = styled.a`
    letter-spacing: 0.1em;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 45px;
    max-width: 160px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%

        --uismLinkDisplay: var(--smLinkDisplay, inline-flex);
    display: var(--uismLinkDisplay);
    color: #000;
    outline: solid  2px #000;
    position: relative;
    transition-duration: 0.4s;
    overflow: hidden;

    &:before {
        margin: 0 auto;
        transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
        transition-duration: 0.4s;
        content: attr(data-sm-link-text);
        color: #FFF;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        -webkit-transform: translateY(500%) scale(-0.1,20);
        transform: translateY(500%) scale(-0.1,20);
        
    }

    &:hover{
        background-color: #000;
     
    }

    &:hover:before{
        letter-spacing: 0.05em;
        -webkit-transform: translateY(0) scale(1,1);
                transform: translateY(0) scale(1,1);
    }
`;
export const PSpan = styled.span`
    margin: 0 auto;
    transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    transition-duration: 0.4s;

    &:hover{
        -webkit-transform: translateY(-400%) scale(-0.1,20);
        transform: translateY(-400%) scale(-0.1,20);
    }
`;


export const ImgProduct = styled.img`
    object-fit:cover;
    position: relative;
    top:-80px;
    width: 100%;
    height: 25vh;
    z-index: 4;
    // @media screen and (max-width: 960px){
    //     width: 50%;
    // }
  `;

export const Plusbutton = styled.button`
    position: relative;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;

    margin: auto;
    border:none;
    box-shadow: 1.5px 1.5px black;
    background-color: orange;

    &:hover{
        box-shadow: 1px 1px black;
}

}
`;
export const Flexbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Minusbutton = styled.button`
    position: relative;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;
    
    margin: auto;
    border:none;
    box-shadow: 1.5px 1.5px black;
    background-color: #fbae1a;

    &:hover{
        box-shadow: 1px 1px black;
    }
   
`;

export const Addtocartbtn = styled.button`
// float:right;
width: 70%;
padding:8px 12px;
margin:auto;
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

`;

export const Flexdiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 20px;
    margin:  auto;
    // border: 1px solid red;
    
`;

export const FAcartcss = styled.div`
   position:relative;
   top: -132px;
   right: -215px;
   color: white;
   width: 40px;
   height: 30px;
   border-radius: 4px;
    background-color: #fbae1a;
    box-shadow: 1.5px 1.5px black;
   
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover{
        box-shadow: 1px 1px black;
        background-color: red;
    }
`;

export const TTLdisplay = styled.div`
    position: sticky;
    top: 0;
    // border: 1px solid red;
    text-align: center;
    margin: 20px auto;
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    height: 30px;
    color: #fbae1a;
    margin: 0 auto 40px auto;
    z-index: 4;
    font-size: 1.2rem;
    text-shadow: 1px 1px 1px black;

    @media screen and (max-width: 1200px){
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    }
`;

export const Checkoutdiv = styled(LinkR)`
    position: absolute;
    right:0;
    top: 5px;
    color: #fbae1a;
    cursor: pointer;
    text-decoration: none;


     &:hover{
         color: green;
     }

     @media screen and (max-width: 1200px){
        position: relative;
        top: 0;

        
    }
`;