import { useEffect, useRef, useState } from "react";
import {  CTForm, HEADER2, CTinfordiv, CTsubmitbtn, SpanCT, CTContainer, CTprompt, CTcontent, CTBtn, CTpromptdiv } from "./Contactelements";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { FormHelperText, TextField } from "@mui/material";



const ContactForm = () => {
  


  const [Values, setValues] = useState({
    name:'',
    email:'',
    message:'',
    Prompted:false
  });

  const FormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),

});

const { register, reset, handleSubmit, watch, formState:{errors} } = useForm({
    resolver: yupResolver(FormSchema),
})

const Watchname = watch("name", false);
const Watchemail = watch("email", false);
const Watchmessage = watch("message", false);

useEffect(()=>{
    const Subscription = watch((value,{name, type})=>console.log(value, name, type));
    return ()=> Subscription.unsubscribe();
},[watch])

const FForm = useRef();
 const handleChange = (prop) => (event) => {
        setValues({ ...Values, [prop]: event.target.value });
      };

const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_438j29p', 'contact_form', FForm.current, 'e_Kj3aGMgJDPVWzSz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

      };




  return (
      <CTContainer>
      <CTForm
        ref={FForm} 
        onSubmit={handleSubmit(sendEmail)}
        >
       <HEADER2>CONTACT US</HEADER2>
       <TextField
            id="outlined-basic" 
            label="Name" 
            name='name'
            onChange={handleChange('name')}
            variant="outlined" 
            margin="normal"
            {...register('name')}
        />
            {errors.name && <FormHelperText error>{errors.name.message}</FormHelperText>}
            
        <TextField
            id="outlined-basic" 
            label="Email" 
            name='email'
            onInput={e=>setValues({...Values, email:e.target.value})}
            onChange={handleChange('email')}
            variant="outlined" 
            margin="normal"
            {...register('email')}
        />
            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
        
        
            <TextField 
            id="outlined-basic" 
            label="Your Message Here"  
            variant="outlined" 
            margin="normal" 
            multiline
            onChange={handleChange('message')}
            sx={{input: {
              color:'#fbae1a'
            }}}
            name='message'
            rows={5} 
            {...register('message')}
        />
        {errors.message && <FormHelperText error>{errors.message.message}</FormHelperText>}
        <CTsubmitbtn 
         onClick={()=>{
          
                  Watchname|| Watchemail|| Watchmessage ?setValues({...Values, Prompted:true}):
                  console.log('fail form')}}
  
        >Send Message</CTsubmitbtn>

        {
          Values.Prompted?
          <CTpromptdiv>
            <CTprompt>
              <CTcontent>
                Thank you for contacting us. We will get back to you via your email {Values.email} within 5 business days.
              </CTcontent>
              <CTBtn onClick={()=>{
                reset({name:'', email:'', message:''})
                setValues({...Values, Prompted:false})
              }}
              >Back</CTBtn>
            </CTprompt>
          </CTpromptdiv>
          :
          <></>
        }

        <CTinfordiv>
            <SpanCT class="fa fa-phone"></SpanCT>001 1023 567
            <SpanCT class="fa fa-envelope-o"></SpanCT> contact@gourmet-express.com
        </CTinfordiv>
    
    </CTForm>
   
    </CTContainer>
  );
};

export default ContactForm;