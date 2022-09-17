import React,{useState} from 'react';
import Promo from '../../pages/Promo/Promo';
// import HeroCarousel from './herocarousel';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { HeaderUniversal, AboutInnerContainer, Aboutbutton, HeroOuterdiv, HeroP, Herodiv, Aboutbg, AboutPhrase, AboutContainer, HeroBgimg, HeroContainer, Aboutlogo, HeroPhrase, ImgHero, Promobutton, PromobuttonAtag } from './herocomponents';


const HeroSection = () => {

    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleClick = () => {
      setHandleOpen({ open: true });
    };
    // const matches = useMediaQuery("(max-width:600px)");
    const [Promoprompt, setPromoprompt] = useState(false);

    const togglePromoprompt = ()=>{
      setPromoprompt(!Promoprompt)
    }
    

  return (
  <>
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
    {/* <HeroCarousel
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
    /> */}
    <AboutContainer>
    
      <AboutInnerContainer>
        <Aboutlogo />
        
      <AboutPhrase>
      <HeaderUniversal>About Us</HeaderUniversal>
        <p>Quality cuts and various types of meat and vegetable availble</p>
        <p>Recipes, fresh ingredients and fast delivery readily for you to cook.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <Aboutbutton>Mor About Us</Aboutbutton>
        
      </AboutPhrase>
      </AboutInnerContainer>
    </AboutContainer>
    {/* <Aboutbg/> */}


       </>
    );
};

export default HeroSection;
