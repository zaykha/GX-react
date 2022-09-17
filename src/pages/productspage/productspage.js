import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Catagories';
import items from './data';
import { Pdiv, Checkoutdiv, ImgProduct, PSection, PTitle, PUnderline, TTLdisplay } from './productelements';
import Navbar from '../../Components/Navbarcomponents';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Categoriesmobile from './Catagoriesmobile';
import Footer from '../../Components/Footer/Footer';
import { FaArrowRight, FaCartArrowDown } from 'react-icons/fa';



const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const Productspage = (props) => {
  const {basket, onAdd, onRemove, ondelete}= props;



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

  const [isOpen, setIsOpen] = useState(false);
  
  const togglesidebar = () => {
     setIsOpen(!isOpen);
 
  }  

  const itemsPrice = basket.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <main>

      <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
       <Navbar togglesidebar={togglesidebar}/>
       <Pdiv>
       <ImgProduct src={require('../../assets/bg3.jpg')} alt='heromeat'/>
       
      <PSection>
        <PTitle>
          Our Products
          <PUnderline/>
        </PTitle>
       
        <Categories categories={categories} filterItems={filterItems} />
        <Categoriesmobile categories={categories} filterItems={filterItems}/>
        <TTLdisplay>Total: {itemsPrice + 1500} kyats
        <Checkoutdiv to='/cart'>Check Out <FaCartArrowDown/><FaArrowRight/></Checkoutdiv>
        </TTLdisplay>
        
        <Menu items={menuItems} ondelete={ondelete} basket={basket} onAdd={onAdd} onRemove={onRemove}/>
      </PSection>
      </Pdiv>
      <Footer/>
      
  
    </main>
  )
}

export default Productspage;
