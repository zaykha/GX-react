import React,{useState} from 'react';
import Promo from '../../pages/Promo/Promo';

import { 
  Aboutdiv, 
  HomeOuterDiv, 
  HeaderUniversal, 
  AboutInnerContainer, 
  Aboutbutton, 
  HeroOuterdiv, 
  HeroP, 
  Herodiv, 
  AboutPhrase, 
  AboutContainer, 
  HeroBgimg, 
  HeroContainer, 
  Aboutlogo, 
  HeroPhrase, 
  Promobutton,
} from './herocomponents';



const HeroSection = () => {

   
    const [Promoprompt, setPromoprompt] = useState(false);

    const togglePromoprompt = ()=>{
      setPromoprompt(!Promoprompt)
    }
    
    
    

  return (
    <>
  <HomeOuterDiv></HomeOuterDiv>
    <HeroContainer>
      <HeroBgimg/>
        <HeroOuterdiv>
              <Herodiv>
                  <HeroPhrase>
                    Welcome to 
                      GOURMET EXPRESS
                  </HeroPhrase>
                  <HeroP>High Quality Meat cut made with love delivered to your doorstep.</HeroP>

                  <Promobutton onClick={togglePromoprompt}>
                        Promo Sets! 
                  </Promobutton>
                  <Promo Promoprompt={Promoprompt} togglePromoprompt={togglePromoprompt} onClick={togglePromoprompt} />
              </Herodiv>
        </HeroOuterdiv>
    </HeroContainer>
    <AboutContainer>
    
      <AboutInnerContainer>
        <Aboutlogo />
        
      <AboutPhrase>
      <HeaderUniversal>About Us</HeaderUniversal>
      <Aboutdiv>
        <p>Quality cuts and various types of meat and vegetable availble</p>
        <p>Recipes, fresh ingredients and fast delivery readily for you to cook.</p>
      </Aboutdiv>
        <Aboutbutton to='/about'>More About Us</Aboutbutton>
        
      </AboutPhrase>
      </AboutInnerContainer>
    </AboutContainer>

        
        
      

       
       </>
    );
};

export default HeroSection;
