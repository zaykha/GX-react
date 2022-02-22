import React from 'react';
import {Mshopcatadiv, Selectcata} from './Catamobile';


const Categoriesmobile = ({ categories, filterItems }) => {


    return (

    <Mshopcatadiv>
        <form>
        
            <Selectcata onChange={(e)=>categories.map((category)=>filterItems(e.target.value))} >
        {categories.map((category, index) => {
        return (
          <option
          key={index}>  
            {category}
          </option>
        )
      })}
      </Selectcata>
        </form>
    </Mshopcatadiv>
    
    )
  }
  
  export default Categoriesmobile;

