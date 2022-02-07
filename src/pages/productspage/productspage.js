import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Catagories';
import items from './data';
import { PSection, PTitle, PUnderline } from './productelements';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const Productspage = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <PSection>
        <PTitle>
          <h2>our menu</h2>
          <PUnderline/>
        </PTitle>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </PSection>
    </main>
  )
}

export default Productspage;
