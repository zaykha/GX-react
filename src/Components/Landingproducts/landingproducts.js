import React from 'react';
import { LPcontainer, LPcontent } from './LPelements';

const Landingproducts = () => {



    const ProductHeaddingarr = [
        {id: 1, name:'Pork', src:require("../../assets/LPproducts/porkLP.jpg")},
        {id: 2, name:'Chicken', src: require("../../assets/LPproducts/chickenLP.jpg")},
        {id: 3, name:'seafood', src: require("../../assets/LPproducts/seafoodLP.jpg")},
        {id: 4, name:'beef', src: require("../../assets/LPproducts/beefLP.jpg")},
        {id: 5, name:'mutton', src: require("../../assets/LPproducts/muttonLP.jpg")},
        {id: 6, name:'vegs', src: require("../../assets/LPproducts/vegLP.jpg")},
        {id: 7, name:'sets', src: require("../../assets/LPproducts/setLP.jpg")}
        
    ]


  return (
  
  
 
  <LPcontainer>
  <h1>Exploring made Easy!</h1>
      
        {ProductHeaddingarr.map((product)=>(
            <LPcontent key={product.id}>
            <img src={product.src} alt={product.name} width='100%' height='240px'/>
            <h3>{product.name}</h3>
            </LPcontent>
        ))}
    </LPcontainer>
 
 
  );
};

export default Landingproducts;
