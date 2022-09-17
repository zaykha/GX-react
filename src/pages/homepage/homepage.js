import React from 'react';
import Navbar from '../../Components/Navbarcomponents';
import ContactForm from '../../Components/Contactus/ContactForm';
import HeroSection from '../../Components/Herocomponents';
import Landingproducts from '../../Components/Landingproducts/landingproducts';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';

const Homepage = () => {
    const description = "Welcome to Gourmet Express";
    const title = "Gourmet Express";
    const columns = [
      {
          title: "Resources",
          resources: [
              {
                  name: "About",
                  link: "/about"
              },
              {
                  name: "Careers",
                  link: "/careers"
              },
              {
                  name: "Contact",
                  link: "/contact"
              },
              {
                  name: "Admin",
                  link: "/admin"
              }
          ]
      },
      {
          title: "Legal",
          resources: [
              {
                  name: "Privacy",
                  link: "/privacy"
              },
              {
                  name: "Terms",
                  link: "/terms"
              }
          ]
      },
      {
          title: "Visit",
          resources: [
              {
                  name: "Locations",
                  link: "/locations"
              },
              {
                  name: "Culture",
                  link: "/culture"
              }
          ]
      }
   ];
  
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
     {/* <SimpleReactFooter 
           description={description} 
           title={title}
           columns={columns}
           linkedin="fluffy_cat_on_linkedin"
           facebook="fluffy_cat_on_fb"
           twitter="fluffy_cat_on_twitter"
           instagram="fluffy_cat_live"
           youtube="UCFt6TSF464J8K82xeA?"
           pinterest="fluffy_cats_collections"
           copyright="black"
           iconColor="2a2a2a"
           backgroundColor="black"
           fontColor="white"
           copyrightColor="darkgrey"
     /> */}
     </div>
    );
};

export default Homepage;
