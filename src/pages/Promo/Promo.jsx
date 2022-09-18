import React from 'react';
import { PromoOuterdiv, Promocontent, PromoImg, Linkbtn } from './Promoelement';
import pork from '../../assets/sets/Pork.jpg';
import Chicken from '../../assets/sets/Chicken.jpg';
import Fish from '../../assets/sets/Fish.jpg';
import Mutton from '../../assets/sets/Mutton.jpg';
import Beef from '../../assets/sets/Beef.jpg';
import Prawn from '../../assets/sets/Prawn.jpg';
import { CloseIcon, Icon } from '../../Components/Sidebar/Sidebarelement';
import { Carousel } from 'react-responsive-carousel';




const Promo = ({Promoprompt, togglePromoprompt}) => {



  return (
    <PromoOuterdiv
    Promoprompt={Promoprompt}
    >
    <Icon>
        <CloseIcon onClick={togglePromoprompt}/>
    </Icon>
    
    <Promocontent>
        <Carousel autoPlay="true">
            
                <PromoImg src={Beef}  alt="promo" />
           
            
                <PromoImg src={Fish}  alt="promo" />
           
            
                <PromoImg src={Mutton}  alt="promo" />
           
            
                <PromoImg src={pork}  alt="promo" />
           
            
                <PromoImg src={Prawn}  alt="promo" />
           
            
                <PromoImg src={Chicken}  alt="promo" />
           
            {/* <PromoImg to='/productspage' src={Chicken}  alt="promo" />
            <PromoImg to='/productspage' src={Fish}  alt="promo" />
            <PromoImg to='/productspage' src={Mutton}  alt="promo" />
            <PromoImg to='/productspage' src={pork}  alt="promo" />
            <PromoImg to='/productspage' src={Prawn}  alt="promo" />               */}
        </Carousel>
    </Promocontent>
    <Linkbtn to='/productspage'>Shop now</Linkbtn>       
        
    </PromoOuterdiv>
  )
}

export default Promo
