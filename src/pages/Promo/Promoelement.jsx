import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { stepClasses } from "@mui/material";


export const PromoOuterdiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: ${({ Promoprompt }) => (Promoprompt ? 'flex' : 'none')};
    top: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    z-index: 200;
    // transition: 3s ease-in-out;
    // opacity: ${({ Promoprompt }) => (Promoprompt ? '100%' : '0')};
    // right: ${({ Promoprompt })=>( Promoprompt ? '0' : '-100%')};
    
`;

export const LeftAr =styled(FaAngleLeft)`
    position: relative;
    right: 5rem;
    font-size: 5rem;
    color: white;
    :hover{
        cursor: pointer;
        color: #fbae1a;
    }
`;

export const RightAr =styled(FaAngleRight)`
    position: relative;
    left: 5rem;
    font-size: 5rem;
    color: white;
    :hover{
        cursor: pointer;
        color: #fbae1a;
    }
`;

export const Promodiv = styled(LinkS)`
    position: relative;
    width: 46rem;
    height: 31rem;
    z-index: 3;
    :hover{
        cursor:pointer;
        outline: 1px solid white;
        // box-shadow: 1px 1px 1px white;
    }
    // margin: 25% auto;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    // border: 6px solid red;
    // transform: translate(-50%, -50%);
    
`;

// export const Promocontent = styled.div(props=>({
//     position: "relative",
//     right: (props)=>{
//         switch (props.Carolcount) {
//             case 1: 
                
//                 break;
        
//             default:
//                 break;
//         }
//     },

    
//     // width: 46rem;
//     height: "31rem",
//     display: "flex"
//     // flex-direction: row;
//     // justify-content: center;
//     // align-items: center;
//     // overflow: hidden;
//     // border: 6px solid green;
//     // flex-wrap: wrap
// }))
    
// ;
export const PromocontentActive = styled(LinkS)`
    position: relative;
    height: 31rem;
    display: flex;
    opacity:  1;
    transition-duration: 1s ease;
    transform: scale(1.08);
`;

export const Promocontent = styled(LinkS)`
    position: relative;
    height: 31rem;
    display: flex;
    opacity: 0;
    transition-duration: 1s;
`;

export const PromoImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
    
`;