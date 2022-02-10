import React from 'react';
import Navbar from '../../Components/Navbarcomponents';
import SimpleReactFooter from 'simple-react-footer';

const checkoutpage = () => {
    const description = "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
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
      <>
    <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
    <Navbar togglesidebar={togglesidebar}/>
    <SimpleReactFooter 
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
     />;
    </>
  )
}

export default checkoutpage