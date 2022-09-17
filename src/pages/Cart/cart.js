import React, { useState, useRef } from 'react';
import { Cartinput, AdjustBtn, CartCard, CartButton, CartForm, CartPage, Cartflexdiv, CartMaincontainer, CartSummarydiv, CartTotaldiv } from './cartelement';
import { InputAdornment, TextField } from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbarcomponents';
import Footer from '../../Components/Footer/Footer';
import emailjs from '@emailjs/browser';

const Cart = (props) => {
    const {basket, onAdd, onRemove} = props;
    const itemsPrice = basket.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice < 10000 ? 0 : 1500;
    const totalPrice = itemsPrice + shippingPrice;

    const FForm = useRef();
    
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

    const Checkout = ()=>{
        console.log(Values)
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
    <CartPage>
        <Sidebar/>
        <Navbar/>
    <CartCard>
    <CartForm ref={FForm} onSubmit={sendEmail}>
        <CartMaincontainer>
            <h1>Cart Summary</h1>
        <div>
            {basket.length === 0 && <div> Cart empty</div>}
        </div>
        {basket.map((item)=>(
    
            <Cartflexdiv key={item.id}>
                <Cartinput type='text' name='itemTitle'  value={item.title}/>
                <Cartinput type='text' name='itemPrice'  value={`$ ${item.price}/kg`}/>
                <Cartflexdiv>
                    <AdjustBtn onClick={()=> onAdd(item)}> + </AdjustBtn>
                    
                    <AdjustBtn onClick={()=> onRemove(item)}> - </AdjustBtn>
                </Cartflexdiv>
                <Cartinput type='text' name='itemqty'  value={`${item.qty} x $ ${item.price}`}/>
                <Cartinput type='text' name='itemTotal' value={`$ ${item.qty * item.price}`}/>

            </Cartflexdiv>


        ))}

            {basket.length !==0 && (
                <>
                <CartSummarydiv>
                    <div>Item Price</div>
                    <Cartinput type='text' name='TotalForItems' value={`$ ${itemsPrice}`}/>
                </CartSummarydiv>
                <CartSummarydiv>
                    <div>Delivery Charges</div>
                    <Cartinput type='text' name='shippingFees' value={`$ ${shippingPrice}`}/>
                </CartSummarydiv>
                <CartTotaldiv>
                    <div>Total Price</div>
                    <Cartinput type='text' name='grandTotal' value={`$ ${totalPrice}`}/>
                </CartTotaldiv>

                </>

            )}
</CartMaincontainer>
        
        <TextField required id="outlined-basic" label="Name" 
            name='user_name'
            value={Values.name}
            onChange={handleChange('name')}
            variant="outlined" margin="normal"/>
            
            {/* <label htmlFor='name'>Name:</label> */}
        <TextField required id="outlined-basic" label="Email" 
            value={Values.email}
            name='user_email'
            onChange={handleChange('email')}
            variant="outlined" margin="normal"/>
            {/* <label htmlFor='email'>Email:</label> */}

        <TextField
            required
            InputProps={{
                startAdornment: <InputAdornment position="start">+959</InputAdornment>,
                inputMode: 'numeric', pattern: '[0-9]*'
            }}
            id="outlined-basic" label="Contact" 
            onChange={handleChange('contact')}
            name='user_contact'
            value={Values.contact}
            variant="outlined" margin="normal"/>

            {/* <label htmlFor='telephone'>Mobile Number:</label> */}
            {/* <label htmlFor='address'>Address:</label> */}
            <TextField 
                required
                id="outlined-basic" label="Address"
                value={Values.address}
                onChange={handleChange('address')}
                name='user_address'
                variant="outlined" margin="normal"/>

            <TextField 
                id="outlined-basic" 
                label="Your Message Here"  
                variant="outlined" margin="normal" multiline
                value={Values.message}
                onChange={handleChange('message')}
                name='user_message'
                rows={4} />

            
            <CartButton onClick={Checkout}>Submit</CartButton>
           
        </CartForm>



    
    </CartCard>
    <Footer/>
    </CartPage>
  )
}

export default Cart;