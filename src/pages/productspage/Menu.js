import React,{useState} from 'react';
import { PSectioncenter, PH4item, PArticlemenuitem, PIMGphoto, Pdiviteminfo, Pheader,
   PH4price, Plusbutton, Minusbutton, Addtocartbtn, Flexdiv, FAcartcss, Flexbox, TTLdisplay
} from './productelements';
import './p.css';
import {  FaBan, FaCheck } from 'react-icons/fa';



const Menu = (props) => {
  const {items, basket, onAdd, onRemove, ondelete} = props;
  
  const [itemIndex, setitemIndex] = useState(0);
  
  const [hover, sethover] =useState(true);
  const togglehover = ()=>{
    sethover(!hover);
  }
 
  
  return (
    <PSectioncenter>

      {items.map((menuItem) => {
        const { id, title, img, price, perunit } = menuItem
        const exist = basket.find((x) => x.id === menuItem.id);
        
        return (
          <PArticlemenuitem key={id} 
          className={exist?'addedtobsk':'normalbsk'}
           >
            <PIMGphoto src={img} alt={title}  />
            <Pdiviteminfo >
              <Pheader>
                <PH4item>{title}</PH4item>
        
                <PH4price >{price}{perunit}</PH4price>
              </Pheader>

           
           
             {exist?
              (<>
                <Flexdiv>
                <Plusbutton onClick={()=> onAdd(menuItem)}>+</Plusbutton>
                <h3>{exist.qty}</h3>
                <Minusbutton onClick={()=> onRemove(menuItem)}>-</Minusbutton>
                </Flexdiv>
                <Flexbox>{menuItem.price * exist.qty} Kyats</Flexbox>

                <FAcartcss
                onMouseEnter={togglehover} 
                onMouseLeave={togglehover}
                onClick={
                  ()=>{
                    ondelete(menuItem);
                    sethover(false);
                  }}
                >
                  
                  {hover?
                  <FaBan  />:
                  <FaCheck/>}
                </FAcartcss>
                </> 
                )       
             :
             (
              <Addtocartbtn
              className={exist?'hidden':null}
              onClick={()=>{
                onAdd(menuItem);
                sethover(false);
              }}
             >
                Add to cart
             </Addtocartbtn>)
             }
   
            </Pdiviteminfo>
            
          </PArticlemenuitem>
        )
       
      })}
    
    </PSectioncenter>
  )
}

export default Menu

