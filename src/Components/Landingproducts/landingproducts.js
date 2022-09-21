import React from 'react';
import { LPInnerContainer, LPcontainer, LPcontent, PImgpl, PNAME, Lpcontentcontainer } from './LPelements';

const Landingproducts = () => {



    const ProductHeaddingarr = [
        {id: 1, name:'Pork', src:require("../../assets/LPproducts/porkLP.jpg")},
        {id: 2, name:'Chicken', src: require("../../assets/LPproducts/chickenLP.jpg")},
        {id: 3, name:'Seafood', src: require("../../assets/LPproducts/seafoodLP.jpg")},
        {id: 4, name:'Beef', src: require("../../assets/LPproducts/beefLP.jpg")},
        {id: 5, name:'Mutton', src: require("../../assets/LPproducts/muttonLP.jpg")},
        {id: 6, name:'Vegs', src: require("../../assets/LPproducts/vegLP.jpg")},
        {id: 7, name:'Sets', src: require("../../assets/LPproducts/setLP.jpg")}
        
    ]


  return (
  
 
    
  
    <LPcontainer>
      <LPInnerContainer>
      <PNAME>Exploring made Easy!</PNAME>
     <Lpcontentcontainer>
        {ProductHeaddingarr.map((product)=>(
            <LPcontent to='/productspage' key={product.id}>
            <PImgpl src={product.src} alt={product.name} />
            <PNAME>{product.name}</PNAME>
            </LPcontent>
        ))}
     </Lpcontentcontainer>
      </LPInnerContainer>
    </LPcontainer>
  
   
    
 
  );
};

export default Landingproducts;
