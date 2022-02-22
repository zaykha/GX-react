import React, { useState } from "react"; 
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbarcomponents";
import { ImgProduct } from "../productspage/productelements";
import ContactForm from "../../Components/Contactus/ContactForm";
import Footer from "../../Components/Footer/Footer";
import { Abtpara, Paracontainer, AbtCarouselcontainer, AbtImgContainer, Sustain, AbtcarCtner, SustainCtner } from "./Aboutcomponents";
const About = () => {

const [isOpen, setIsOpen] = useState(false);
  
const togglesidebar = () => {
     setIsOpen(!isOpen);
 
  }  


  return (
    <>
    <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
       <Navbar togglesidebar={togglesidebar}/>
       <ImgProduct src={require('../../assets/Aboutpics/aboutnavhero.jpg')} alt='heromeat'/>
        <Abtpara>
            <Paracontainer>
                <h1>
                    Our commitment
                </h1>
                <p>Our vision is to ensure that we supply our customers with the highest quality of meats according to their specification, whilst also becoming the preferred butchery/meat shop for all the customers here in Yangon in three years.</p>
                <h2>
                    Our Business Structure
                </h2>
                <p>
                Even though a butchery/meat shop business might seem like a basic kind of business that doesn’t require much work to be done except meat cutting training, we intend to build a business that is of high standard and in order to do so we will ensure that we get it right from the beginning by building a solid business structure.
                We intend to ensure that we go the extra mile in getting hardworking and competent employees to occupy the various positions in our company and also handle the various responsibilities and tasks that these positions will bring so that we will be able to handle our corporate goals and objectives.
                </p>
                <h2>Job Roles and Responsibilities</h2>
                <h3>Chief Executive Officer</h3>
                <ul>
                    <li>Makes the decisions and overall strategies for organizational direction</li>
                    <li>Ensures that organizational policies and decisions are duly implemented</li>
                    <li>Negotiates with high level clients on behalf of the company</li>
                </ul>
                <h3>Butchery/Meat Shop Supervisor</h3>
                <ul>
                    <li>In charge of ensuring that the meat is cut according to customer specifications</li>
                    <li>Ensures that the right parts are cut</li>
                    <li>Is knowledgeable about industry trends and how it might affect the company</li>
                </ul>
                <h3>Sales and Marketing Team</h3>
                <ul>
                    <li>Conducts market research in order to determine more target markets for the organization</li>
                    <li>Drafts effective marketing strategies that will generate revenue for the organization</li>
                    <li>Conducts one-on-one marketing on behalf of the organization</li>
                </ul>
                <h3>Driver</h3>
                <ul>
                    <li>In charge of driving supplies to major customers</li>
                    <li>Ensures that the correct stock is taken to accurate destination</li>
                    <li>Carries out light maintenance on the vehicle when necessary.</li>
                </ul>
            
            </Paracontainer>
        </Abtpara>
        <AbtCarouselcontainer>
            <AbtcarCtner>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt1.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt2.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt3.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt4.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt5.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt6.jpg')} alt='heromeat'/>
            </AbtcarCtner>
        </AbtCarouselcontainer>

        <SustainCtner>
        <Sustain>
            <h1>Company Sustainablity Approach</h1>
        <p>No one opens a business with the intention of having it fail in the end, which is why serious entrepreneurs lay plans that would ensure that the business remains sustained for as long as they want it and also expands as well.

There are several factors that every entrepreneur should look into if they intend to run their business for a long time, and such factors include; building a solid business structure, ensuring a high retention of customers as well as having a solid re-investment strategy.

Building a solid business structure is very vital to the growth of the business and as such we will ensure that we go all out to get the right employees with the right skill set to work in the various positions and handle the different responsibilities that will be assigned to them.

We will ensure that our employees are well paid and have several incentive packages aimed at motivating and ensuring that they put in their best for us. We will also carry out periodical performance appraisals in order to ensure that hardworking employees get promoted. Also, we will ensure that all our employees project the image of our company positively at all times.

Without our customers, we will not be able to generate the needed revenue that will help our business grow and due to this we intend to ensure that all our customers are well treated in such a way that will cause us to retain a high amount of customers to our business and allow us be the preferred butchery/meat shop here in Yangon – Myanmar.

We will also ensure that we reward loyal customers with discounts especially those who refer others to patronize our products and services.

Because we took a loan in order to be able to run our business, we will put in place effective strategies that will see us plough back a percentage of our earnings into our business in order to ensure that we have a solid financial base and bottom line and grow from there. We believe that the above three factors will be suitable for our expansion and efforts at sustaining the business for as long as we want it.
</p>
        </Sustain>

        </SustainCtner>
    <ContactForm />
    <Footer />
    
    </>
  )
}

export default About