import React from 'react';
import Navbar from '../../Components/Navbarcomponents';
import ContactForm from '../../Components/Contactus/ContactForm';
import HeroSection from '../../Components/Herocomponents';
import Landingproducts from '../../Components/Landingproducts/landingproducts';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';


const Homepage = () => {
  
   const [isOpen, setIsOpen] = useState(false);
  
   const togglesidebar = () => {
      setIsOpen(!isOpen);
  
   }  
  return (
      <div>
    <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
    <Navbar togglesidebar={togglesidebar}/>
    
     <HeroSection/>
     <Landingproducts/>
     <ContactForm />
     <Footer/>
     
     </div>
    );
};

export default Homepage;
