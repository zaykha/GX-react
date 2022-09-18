// import React, { useState } from "react";
import {  CTForm, HEADER2, Para, INPUTCT, CTinfordiv, CTsubmitbtn, SpanCT, CTContainer } from "./Contactelements";

// const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  // const [submitted, setSubmitted] = useState(false);
  // const handleSubmit = () => {
  //   setTimeout(() => {
  //     setSubmitted(true);
  //   }, 100);
  // };

  // if (submitted) {
  //   return (
  //     <>
  //       <h2>Thank you!</h2>
  //       <div>We'll be in touch soon.</div>
  //     </>
  //   );
  // }

  return (
      <CTContainer>
      <CTForm

      // action={FORM_ENDPOINT}
      // onSubmit={handleSubmit}
      // method="POST"
      // target="_blank"
    >
       <HEADER2>CONTACT US</HEADER2>
        <Para type="Name:"><INPUTCT placeholder="Write your name here.."></INPUTCT></Para>
        <Para type="Email:"><INPUTCT placeholder="Let us know how to contact you back.."></INPUTCT></Para>
        <Para type="Message:"><INPUTCT placeholder="What would you like to tell us.."></INPUTCT></Para>
        <CTsubmitbtn>Send Message</CTsubmitbtn>

        <CTinfordiv>
            <SpanCT class="fa fa-phone"></SpanCT>001 1023 567
            <SpanCT class="fa fa-envelope-o"></SpanCT> contact@gourmet-express.com
        </CTinfordiv>
    
    </CTForm>
    {/* <FTCTbg/> */}
    </CTContainer>
  );
};

export default ContactForm;