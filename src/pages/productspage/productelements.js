import styled from "styled-components";

export const PSection= styled.section`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    padding: 5rem 0;

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
export const PBTNcontainer = styled.div`
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
`;
export const Ppitemtext = styled.p`
    // border: 1px solid green;
    margin-bottom: 0;
    // padding-top: 1rem;
`;