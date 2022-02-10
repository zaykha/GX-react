import React from 'react'
import { PSectioncenter, PH4item, PArticlemenuitem, PIMGphoto, Pdiviteminfo, Pheader, PH4price, 
} from './productelements'
import './PBtn.css'
// PAddtocart, PBTNcontainer,
// PAnc, PSpan

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
{/*               
              <PAddtocart>
                <PBTNcontainer>
               <PAnc data-sm-link-text='+'>
                 <PSpan>Add to Cart</PSpan>
                </PAnc>
                </PBTNcontainer>
                </PAddtocart> */}
              <div className='buttons'>
                <div className='container'>
                  <a href='/' class="btn effect04" data-sm-link-text="+" target="_blank">
                    <span>Add to Cart</span>
                  </a>
                </div>



              </div>


                
            </Pdiviteminfo>
          </PArticlemenuitem>
        )
      })}
    </PSectioncenter>
  )
}

export default Menu