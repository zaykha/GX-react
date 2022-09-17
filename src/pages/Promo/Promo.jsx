import React from 'react';
import { LeftAr, RightAr, PromocontentActive, PromoOuterdiv, Promocontent, PromoImg } from './Promoelement';
import pork from '../../assets/sets/Pork.jpg';
import Chicken from '../../assets/sets/Chicken.jpg';
import Fish from '../../assets/sets/Fish.jpg';
import Mutton from '../../assets/sets/Mutton.jpg';
import Beef from '../../assets/sets/Beef.jpg';
import Prawn from '../../assets/sets/Prawn.jpg';
import { CloseIcon, Icon } from '../../Components/Sidebar/Sidebarelement';
import { useState } from 'react';



const Promo = ({Promoprompt, togglePromoprompt}) => {

    const PromoObj = [
        {
            name: 'Beef',
            src: Beef
        },
        {
            name: 'Chicken',
            src: Chicken
        },
        {
            name: 'Fish',
            src: Fish
        },
        {
            name: 'Mutton',
            src: Mutton
        },
        {
            name: 'Pork',
            src: pork
        },
        {
            name: 'Prawn',
            src: Prawn
         },
    
    ];
 
const [ Carolcount, setCarolcount ] = useState(0);

const Carolstateadd = ()=>{
    
    setCarolcount(Carolcount === PromoObj.length -1 ? 0: Carolcount +1);
       
    console.log(Carolcount);     
};
const Carolstateminus = ()=>{
    
    setCarolcount( Carolcount === 0 ? PromoObj.length-1 :Carolcount -1 );
    
    console.log(Carolcount);        
};


  return (
    <PromoOuterdiv
    Promoprompt={Promoprompt}
    >
    <Icon>
        <CloseIcon onClick={togglePromoprompt}/>
    </Icon>
    
            {/* <Promodiv  > */}
            <LeftAr onClick={Carolstateminus} />
            {PromoObj.map((Promoobj, index)=>{
                return(
                    <div>
                        {index === Carolcount? 

                        <PromocontentActive key={index} onClick={togglePromoprompt} to='/productspage'>
                            {index === Carolcount &&(<PromoImg src={Promoobj.src}  alt={Promoobj.name} />)}
                        </PromocontentActive> :
                        
                        <Promocontent key={index} onClick={togglePromoprompt} to='/productspage'>
                             {index === Carolcount &&(<PromoImg src={Promoobj.src}  alt={Promoobj.name} />)}
                        </Promocontent>
                        }
                    
                    </div>
                )
            })}
            
            <RightAr onClick={Carolstateadd} />
            {/* </Promodiv> */}
    
        
    </PromoOuterdiv>
  )
}

export default Promo
