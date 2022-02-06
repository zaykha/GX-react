import React from 'react';

import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

const HeroCarousel = ({handleOpen, setHandleOpen, isMobile}) => {

  return (
    <div>
    <AutoRotatingCarousel
        label='Shop now'
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ 
            position: "absolute",
            }}
        
        
    >
        <Slide
            media={ <img src={require('../../assets/Pork.jpg')} alt='Pork set'/>}
            title='Pork Set'
            mediaBackgroundStyle= {{
                background: 'black',
                width: '100%',
                height: '77%'
            }}
            style= 
            {{
                backgroundColor: 'black'

            }}
        />
        <Slide
            media={ <img src={require('../../assets/Prawn.jpg')} alt='Prawn'/>}
            title='Prawn Set'
            mediaBackgroundStyle= {{
                background: 'black',
                width: '100%',
                height: '77%'
            }}
            style= 
            {{
                backgroundColor: 'black'

            }}

        />
        <Slide
            media={ <img src={require('../../assets/Mutton.jpg')} alt='Mutton'/>}
            title='Mutton Set'
            mediaBackgroundStyle= {{
                background: 'black',
                width: '100%',
                height: '77%'
            }}
            style= 
            {{
                backgroundColor: 'black'

            }}
       
        />
        <Slide
            media={ <img src={require('../../assets/Chicken.jpg')} alt='Chicken'/>}
            title='Chicken Set'
            mediaBackgroundStyle= {{
                background: 'black',
                width: '100%',
                height: '77%'
            }}
            style= 
            {{
                backgroundColor: 'black'

            }}
         
        />
        <Slide
            media={ <img src={require('../../assets/Fish.jpg')} alt='Fish'/>}
            title='Fish Set'
            mediaBackgroundStyle= {{
                background: 'black',
                width: '100%',
                height: '77%'
            }}
            style= 
            {{
                backgroundColor: 'black'

            }}

        />
        <Slide
            media={ <img src={require('../../assets/Beef.jpg')} alt='Beef'/>}
            title='Beef Set'
            mediaBackgroundStyle= {{
                background: 'black',
                width: '100%',
                height: '77%'
            }}
            style= 
            {{
                backgroundColor: 'black'

            }}
           
        />
       
    </AutoRotatingCarousel>
    </div>

  );
};

export default HeroCarousel;
