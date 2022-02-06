import styled from "styled-components";

export const CTContainer = styled.div`
    position: relative;

`;
export const INPUTCT = styled.input`
    width:100%;
    padding:10px;
    box-sizing:border-box;
    background:none;
    outline:none;
    resize:none;
    border:0;font-family:'Montserrat',sans-serif;
    transition:all .3s;
    border-bottom:2px solid #bebed2;
    z-index:2;

    &:focus {
        border-bottom:2px solid #78788c;
    }
`;


export const CTForm = styled.form`
    width:340px;
    height:440px;
    background:#e6e6e6;
    border-radius:8px;
    box-shadow:0 0 40px -10px #000;
    margin: 250px  auto 150px auto;
    padding:20px 30px;
    max-width:calc(100vw - 40px);
    box-sizing:border-box;
    font-family:'Montserrat',sans-serif;
    position:relative;
    top: 50px;
    // ${INPUTCT}:focus &{
    //     border-bottom:2px solid #78788c;
    //   }
`;

export const HEADER2 = styled.h2`
    margin:10px 0;
    padding-bottom:10px;
    width:180px;
    color:#78788c;
    border-bottom:3px solid #78788c;
`;

export const Para = styled.p`
      &:before {
        content:attr(type);
        display:block;
        margin:28px 0 0;
        font-size:14px;
        color:#5a5a5a;
      }
`;

export const CTsubmitbtn = styled.button`
    float:right;
    padding:8px 12px;
    margin:8px 0 0;
    font-family:'Montserrat',sans-serif;
    border:2px solid #78788c;
    background:0;
    color:#5a5a6e;
    cursor:pointer;
    transition:all .3s;

    &:hover{
        background:#78788c;
        color:#fff;
    }
`;

export const CTinfordiv = styled.div`
    content:'Hi';
    position:absolute;
    bottom:-15px;right:-20px;
    background:#50505a;
    color:#fff;
    width:320px;
    padding:16px 4px 16px 0;
    border-radius:6px;
    font-size:13px;
    box-shadow:10px 10px 40px -14px #000;
    
`;

export const SpanCT = styled.span`
    margin:0 5px 0 15px;
`;

export const CTbg = styled.div`
    position: absolute;
    // border: 1px solid red;
    z-index: -1;
    top:220vh;
    width:100%;
    height:60vh;
    background: url(${require('../../assets/bg2.jpg')}) no-repeat;
    background-size: cover;
    filter: blur(1.5px);
`;