import styled from "styled-components";

export const PSection= styled.section`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    padding: 5rem 0;
    background-color: rgba(0,0,0,0);
    position:relative;
    top:-180px;

    @media screen and (min-width: 992px) {
        width: 95vw;
    }
`;

export const PTitle= styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

export const PUnderline = styled.div`
    width: 5rem;
    height: 0.25rem;
    background: #c59d5f;
    margin-left: auto;
    margin-right: auto;
`;
export const Pcatacontainer = styled.div`
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
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
    gap: 1rem 2rem;
    max-width: 25rem;
    border: 1px solid black;

    @media screen and (min-width: 768px){
        grid-template-columns: 225px 1fr;
        gap: 0 1.25rem;
        max-width: 40rem;
    }
`;

export const PIMGphoto = styled.img`
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid #c59d5f;
    border-radius: 0.25rem;
    display: block;

    @media screen and (min-width:768px){
        height: 175px;
    }

    @media screen and (min-width: 1200px){
        height: 150px;
    }
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
   
`;
export const Pheader = styled.header`
    display: flex;
    margin-bottom: 0.5rem;
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
    z-index: -2;
    // @media screen and (max-width: 960px){
    //     width: 50%;
    // }
  `;