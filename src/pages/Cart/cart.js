import React, { useState } from 'react';
import { CartCard, CartButton, CartForm, CartPage, Cartflexdiv, CartMaincontainer, CartSummarydiv, CartTotaldiv } from './cartelement';
import { TextField } from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbarcomponents';
import Footer from '../../Components/Footer/Footer';
const Cart = (props) => {
    const {basket, onAdd, onRemove} = props;
    const itemsPrice = basket.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice < 10000 ? 0 : 1500;
    const totalPrice = itemsPrice + shippingPrice;
  return (
    <CartPage>
        <Sidebar/>
        <Navbar/>
    <CartCard>
        <CartMaincontainer>
            <h1>Cart Summary</h1>
        <div>
            {basket.length === 0 && <div> Cart empty</div>}
        </div>
        {basket.map((item)=>(
            <Cartflexdiv key={item.id}>
                <div>{item.title} </div>
                <div>${item.price}/kg </div>
                <div>
                    <button onClick={()=> onAdd(item)}>+</button>
                    <button onClick={()=> onRemove(item)}>-</button>
                </div>
                <div> {item.qty} x ${item.price}</div>
                <div>${item.qty * item.price}</div>
            </Cartflexdiv>


        ))}

            {basket.length !==0 && (
                <>
                <CartSummarydiv>
                    <div>Item Price</div>
                    <div>${itemsPrice}</div>
                </CartSummarydiv>
                <CartSummarydiv>
                    <div>Delivery Charges</div>
                    <div>${shippingPrice}</div>
                </CartSummarydiv>
                <CartTotaldiv>
                    <div>Total Price</div>
                    <div>${totalPrice}</div>
                </CartTotaldiv>

                </>

            )}
</CartMaincontainer>
        <CartForm>
        <TextField id="outlined-basic" label="Name"  variant="outlined" margin="normal"/>
            {/* <label htmlFor='name'>Name:</label> */}
        <TextField id="outlined-basic" label="Email"  variant="outlined" margin="normal"/>
            {/* <label htmlFor='email'>Email:</label> */}
        <TextField id="outlined-basic" label="Contact"  variant="outlined" margin="normal"/>

            {/* <label htmlFor='telephone'>Mobile Number:</label> */}
            {/* <label htmlFor='address'>Address:</label> */}
            <TextField id="outlined-basic" label="Your Message Here"  variant="outlined" margin="normal" multiline
          rows={4} />
            <CartButton>Submit</CartButton>
           
        </CartForm>



    
    </CartCard>
    <Footer/>
    </CartPage>
  )
}

export default Cart;