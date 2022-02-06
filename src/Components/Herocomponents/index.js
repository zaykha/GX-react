import React,{useState} from 'react';
import HeroCarousel from './herocarousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Aboutbg, AboutPhrase, AboutContainer, HeroBgimg, HeroContainer, HeroPhrase, ImgHero, Promobutton, PromobuttonAtag } from './herocomponents';



const HeroSection = () => {

    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleClick = () => {
      setHandleOpen({ open: true });
    };
    const matches = useMediaQuery("(max-width:600px)");
  


  return (
  <>
    <HeroContainer>
    <HeroPhrase>
        <h1>GOURMET EXPRESS</h1>
    </HeroPhrase>


    <ImgHero src={require('../../assets/Heromeat.png')} alt='heromeat'/>

  
    <HeroBgimg/>

  <Promobutton>
    
      <PromobuttonAtag onClick={handleClick} >
        Promo Sets!
      </PromobuttonAtag>
    
  </Promobutton>
        
    
    </HeroContainer>
    <HeroCarousel
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
    />
    <AboutContainer>
      <div>
        <img src={require('../../assets/GXlogo.png')} width='240px' alt='logo'/>
      </div>
      <AboutPhrase>
        <h1>About Us</h1>
        <p>Quality cuts and various types of meat and vegetable availble</p>
        <p>Recipes, fresh ingredients and fast delivery readily for you to cook.</p>
        <a href='/'>More about us!</a>
      </AboutPhrase>
    </AboutContainer>
    <Aboutbg/>


       </>
    );
};

export default HeroSection;
