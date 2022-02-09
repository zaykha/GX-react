import React from 'react'
import { PSectioncenter, PH4item, PArticlemenuitem, PIMGphoto, Pdiviteminfo, Pheader, PH4price } from './productelements'


const Menu = ({ items }) => {
  return (
    <PSectioncenter>
      {items.map((menuItem) => {
        const { id, title, img, price, perunit } = menuItem
        return (
          <PArticlemenuitem key={id} >
            <PIMGphoto src={img} alt={title}  />
            <Pdiviteminfo >
              <Pheader>
                <PH4item>{title}</PH4item>
                <PH4price >{price}<p>{perunit}</p></PH4price>
              </Pheader>
              
              <button>Add to Cart</button>
            </Pdiviteminfo>
          </PArticlemenuitem>
        )
      })}
    </PSectioncenter>
  )
}

export default Menu