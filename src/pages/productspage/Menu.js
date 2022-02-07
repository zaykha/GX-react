import React from 'react'
import { PSectioncenter, PH4item, PArticlemenuitem, PIMGphoto, Pdiviteminfo, Pheader, PH4price, Ppitemtext } from './productelements'


const Menu = ({ items }) => {
  return (
    <PSectioncenter>
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem
        return (
          <PArticlemenuitem key={id} >
            <PIMGphoto src={img} alt={title}  />
            <Pdiviteminfo >
              <Pheader>
                <PH4item>{title}</PH4item>
                <PH4price >{price} Kyats/25KyatThar</PH4price>
              </Pheader>
              <Ppitemtext >{desc}</Ppitemtext>
            </Pdiviteminfo>
          </PArticlemenuitem>
        )
      })}
    </PSectioncenter>
  )
}

export default Menu