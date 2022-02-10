import React from 'react';
import { Pcatacontainer, PButtonfilter } from './productelements';

const Categories = ({ categories, filterItems }) => {
  return (
    <Pcatacontainer>
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
    </Pcatacontainer>
  )
}

export default Categories