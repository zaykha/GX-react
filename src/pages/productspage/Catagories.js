import React from 'react';
import { PBTNcontainer, PButtonfilter } from './productelements';

const Categories = ({ categories, filterItems }) => {
  return (
    <PBTNcontainer>
      {categories.map((category, index) => {
        return (
          <PButtonfilter
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </PButtonfilter>
        )
      })}
    </PBTNcontainer>
  )
}

export default Categories