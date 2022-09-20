import React,{ useState} from 'react';
import { PIMGphotoZ, PSectioncenter, PH4item, PArticlemenuitem, Pdiviteminfo, Pheader,
   PH4price, Plusbutton, Minusbutton, Addtocartbtn, Flexdiv, FAcartcss, Flexbox, Setdiv, ELcontainer, ELimg
} from './productelements';
import './p.css';
import {  FaBan, FaCheck } from 'react-icons/fa';
import pork from '../../assets/sets/Pork.jpg';
import Chicken from '../../assets/sets/Chicken.jpg';
import Fish from '../../assets/sets/Fish.jpg';
import Mutton from '../../assets/sets/Mutton.jpg';
import Beef from '../../assets/sets/Beef.jpg';
import Prawn from '../../assets/sets/Prawn.jpg';


const Menu = (props) => {
  const {items, basket, onAdd, onRemove, ondelete} = props;
  
  const [hover, sethover] =useState(true);
  const togglehover = ()=>{
    sethover(!hover);
  }
  
  const [enlarge, setEnlarge] = useState({
    B:60,
    Ch:61,
    Fi:62,
    Mu:63,
    po:64,
    Pr:65,
    PicID:'',
    status:false
  });
  const offEnlarge =()=>{
    setEnlarge({...enlarge,status:false});
  }
  
  
  const FilterZoom = (ID)=>{
    console.log(ID)
    switch (ID) {
      case 60:
        return Beef;
      case 61:
        return  Chicken;
      case 62:
        return  Fish;
      case 63:
        return  Mutton;
      case 64:
        return  pork;
      case 65:
        return  Prawn   
    
      default:
        break;
    }
    
  }

  
  return (
    <PSectioncenter>

      {items.map((menuItem) => {
        const { id, title, img, price, perunit, Zoom } = menuItem
        const exist = basket.find((x) => x.id === menuItem.id);
        
        return (
          <PArticlemenuitem key={id} 
          className={exist?'addedtobsk':'normalbsk'}
           >
        
            <PIMGphotoZ src={img} alt={title}  />
            <Pdiviteminfo >
              <Pheader>
                <PH4item>{title}</PH4item>
        
                <PH4price >{price}{perunit}</PH4price>
                
              </Pheader>

              {Zoom?
              <Setdiv onClick={()=>{
                setEnlarge({...enlarge, PicID:FilterZoom(id), status:true})
                console.log(enlarge.PicID)
                }}>Enlarge Photo 
              </Setdiv>:<></>
              }
              

              {enlarge.status?
                <ELcontainer>
                  <ELimg src={enlarge.PicID} onClick={offEnlarge}/>
                </ELcontainer>:<></>
              }

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

