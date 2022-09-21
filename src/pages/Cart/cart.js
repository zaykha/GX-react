import React, { useState, useRef, useEffect } from 'react';
import { Cartinput, AdjustBtn, CartCard, CartButton, CartForm, CartPage, Cartflexdiv, CartMaincontainer, CartSummarydiv, CartTotaldiv } from './cartelement';
import { FormHelperText, ListItemText, TextField, Typography } from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbarcomponents';
import Footer from '../../Components/Footer/Footer';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Overflowdiv, CancelBtn, Flexdiv, PSUL, PSLI, PSp, OuterlayerSubmit, SubmitPrompt, ConfirmBtn } from './PurchaseSummary';
import { NotiSpan, Btndiv, NotiBtn, Noticard, Notidiv, Notip } from '../../Components/Herocomponents/notielement';

const Cart = (props) => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const FormSchema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
        address: yup.string().required(),
        
    
    });

    const { register, reset, handleSubmit, watch, formState:{errors} } = useForm({
        resolver: yupResolver(FormSchema),
    })
    
    const Watchname = watch("name", false);
    const Watchemail = watch("email", false);
    const Watchcontact = watch("contact", false);
    const Watchaddress = watch("address", false);
    

    useEffect(()=>{
        const Subscription = watch((value,{name, type})=>console.log(value, name, type));
        return ()=> Subscription.unsubscribe();
    },[watch])


    const {basket, onAdd, onRemove} = props;
    const itemsPrice = basket.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice < 10000 ? 0 : 1500;
    const totalPrice = itemsPrice + shippingPrice;

    const FForm = useRef();

    const [Submitted, setSubmitted] = useState({purchaseprompt:false, confirmed:false});
    const [Values, setValues ] = useState({
        basket,
        totalPrice,
        name:'',
        email:'',
        contact:'',
        address:'',
        message:''
    })

    const handleChange = (prop) => (event) => {
        setValues({ ...Values, [prop]: event.target.value });
      };

   

    // const Testsubmit=
    const sendEmail = (e) => {
        // e.preventDefault();
    
        emailjs.sendForm('service_438j29p', 'contact_form', FForm.current, 'e_Kj3aGMgJDPVWzSz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

      };
    // const onSubmit =(data,e) =>console.log(data, e);
    // const onError = (error,e) =>console.log(errors,e);

      const [isOpen, setIsOpen] = useState(false);
  
      const togglesidebar = () => {
         setIsOpen(!isOpen);
     
      } 
    
      const PurchaseSuccess = ()=>{
        setSubmitted({purchaseprompt:false, confirmed:true})
        reset({name:'', email:'', contact:'', address:'', message:''})
        sendEmail()
        basket.length=0
        console.log(Values)
    }
      
      
  return (
    <CartPage>
        
        <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
        <Navbar togglesidebar={togglesidebar}/>
    <CartCard>
    <CartForm 
    ref={FForm} 
    onSubmit={handleSubmit(PurchaseSuccess)}
    >
        <CartMaincontainer>
            <h1>Cart Summary</h1>
        
            {basket.length === 0 && <div> Cart empty</div>}
        
        {basket.map((item)=>(
            <Cartflexdiv key={item.id}>
                <Cartinput type='text' name='itemTitle' readOnly value={item.title}/>
                <Cartinput type='text' name='itemPrice' readOnly value={`$ ${item.price}/kg`}/>
                {/* <Cartflexdiv> */}
                    <AdjustBtn onClick={()=> onAdd(item)}> + </AdjustBtn>
                    
                    <AdjustBtn onClick={()=> onRemove(item)}> - </AdjustBtn>
                {/* </Cartflexdiv> */}
                <Cartinput type='text' name='itemqty' readOnly value={`${item.qty} x $ ${item.price}`}/>
                <Cartinput type='text' name='itemTotal' readOnly value={`$ ${item.qty * item.price}`}/>

            </Cartflexdiv>
          
        )
        )}
        {/* { LoadBasket(CurrentBasket,item) } */}

            {basket.length !==0 && (
                <>
                <CartSummarydiv>
                    <div>Item Price</div>
                    <Cartinput type='text' name='TotalForItems' readOnly value={`$ ${itemsPrice}`}/>
                </CartSummarydiv>
                <CartSummarydiv>
                    <div>Delivery Charges</div>
                    <Cartinput type='text' name='shippingFees' readOnly value={`$ ${shippingPrice}`}/>
                </CartSummarydiv>
                <CartTotaldiv>
                    <div>Total Price</div>
                    <Cartinput type='text' name='grandTotal' readOnly value={`$ ${totalPrice}`}/>
                </CartTotaldiv>

                </>

            )}
        </CartMaincontainer>
        
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
            label="Contact" 
            onInput={e=>setValues({...Values, contact:e.target.value})}
            onChange={handleChange('contact')}
            name='contact'
            variant="outlined" 
            margin="normal"
            {...register('contact')}
        />
            {errors.contact && <FormHelperText error>{errors.contact.message}</FormHelperText>}

            
        <TextField  
            id="outlined-basic" 
            label="Address"
            onChange={handleChange('address')}
            name='address'
            variant="outlined" 
            margin="normal"
            {...register('address')}
        />
            {errors.address && <FormHelperText error>{errors.address.message}</FormHelperText>}


        <TextField 
            id="outlined-basic" 
            label="Your Message Here"  
            variant="outlined" 
            margin="normal" 
            multiline
            onChange={handleChange('message')}
            name='message'
            rows={4} 
            
        />
       
            <CartButton onClick={()=>{
            basket.length===0 ? alert('Empty basket'):

            Watchname|| Watchemail|| Watchcontact|| Watchaddress ?setSubmitted({...Values,purchaseprompt:true}):
            alert("please fill in the form")
           
             }}>
                Next
            </CartButton>
           
            {Submitted.purchaseprompt && !Submitted.confirmed ?
            <OuterlayerSubmit>
                <SubmitPrompt>
                    {/* <SubmitMessage> */}
                       <Typography variant='h3' mt={3}>Purchase Summary</Typography> 
                       <Overflowdiv>
                        {basket.map((item,index)=>(
                            <PSUL key={index}>
                                
                                <PSLI>
                                    <ListItemText primary={item.title} />
                                    <PSp>$ {item.price} /kg</PSp> 
                                </PSLI>
                                <PSLI>For the Quantity of ({item.qty}) Totaling $ {item.qty*item.price}</PSLI>
                            </PSUL>
                        ))}
                        </Overflowdiv>
                        <Typography variant='h5'>Delivery fees: ${shippingPrice}</Typography>
                        <Typography variant='h5'>Grand Total: ${totalPrice}</Typography>
                        <Flexdiv>
                        <ConfirmBtn type='submit'>Confirm Purchase</ConfirmBtn>
                        <CancelBtn onClick={()=>{
                            setSubmitted({...Submitted, purchaseprompt:false})}}>Cancel</CancelBtn>
                        </Flexdiv>
                    {/* </SubmitMessage> */}
                 </SubmitPrompt>
            </OuterlayerSubmit>:<></>

        }

        </CartForm>

        

    
    </CartCard>
    <Footer/>
    
    

    
    {!Submitted.purchaseprompt && Submitted.confirmed ?<Notidiv>
          <Noticard>
            <Notip>
              Thank you for purchasing our products.
            </Notip>
            <Notip>
              We have send you the purchase detail to your email 
              <NotiSpan> {Values.email} </NotiSpan> and will contact you via your contact 
              <NotiSpan> {Values.contact} </NotiSpan> 
              number shortly.
            </Notip>
            <Btndiv>
            <NotiBtn to='/'>Close</NotiBtn>
            </Btndiv>
          </Noticard>
        </Notidiv>:<></>
        }
    </CartPage>
  )
}

export default Cart;