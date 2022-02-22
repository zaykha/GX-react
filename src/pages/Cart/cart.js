import React, { useState } from 'react';
import { Cartflexdiv, CartMaincontainer, CartSummarydiv, CartTotaldiv } from './cartelement';

const Cart = (props) => {
    const {basket, onAdd, onRemove} = props;
    const itemsPrice = basket.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice < 10000 ? 0 : 1500;
    const totalPrice = itemsPrice + shippingPrice;
  return (
    <div>cart
        <CartMaincontainer>
        <div>
            {basket.length === 0 && <div> Cart empty</div>}
        </div>
        {basket.map((item)=>(
            <Cartflexdiv key={item.id}>
                <div>{item.title}</div>
                <div>${item.price}</div>
                <div>
                    <button onClick={()=> onAdd(item)}>+</button>
                    <button onClick={()=> onRemove(item)}>-</button>
                </div>
                <div> {item.qty} x ${item.price}</div>
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

        <form>
            <label htmlFor='name'>Name:</label>
            <input placeholder='Your name here'/>
            <label htmlFor='email'>Email:</label>
            <input placeholder='Your email here'/>
            <label htmlFor='telephone'>Mobile Number:</label>
            <input placeholder='09-795648754' maxLength='12'/>
            <label htmlFor='address'>Address:</label>
            <textarea maxLength='1000' name='address'/>
            <button>submit</button>
        </form>



    </CartMaincontainer>
    </div>
  )
}

export default Cart;