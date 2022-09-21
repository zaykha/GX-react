import React, { useState } from "react"; 
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbarcomponents";
import ContactForm from "../../Components/Contactus/ContactForm";
import Footer from "../../Components/Footer/Footer";
import { AboutOuterDiv, InnerPara, InnerSustain, ImgAbt, Abtpara, Paracontainer, AbtCarouselcontainer, AbtImgContainer, Sustain, AbtcarCtner } from "./Aboutcomponents";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const About = () => {

const [isOpen, setIsOpen] = useState(false);
  
const togglesidebar = () => {
     setIsOpen(!isOpen);
 
  }  


  return (
    <>
    <AboutOuterDiv></AboutOuterDiv>
    <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
       <Navbar togglesidebar={togglesidebar}/>
       <ImgAbt/>
        <Abtpara>
        
            <Paracontainer>
                <InnerPara>
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
                
                    <p>Makes the decisions and overall strategies for organizational direction</p>
                    <p>Ensures that organizational policies and decisions are duly implemented</p>
                    <p>Negotiates with high level clients on behalf of the company</p>
                
                <h3>Butchery/Meat Shop Supervisor</h3>
                
                    <p>In charge of ensuring that the meat is cut according to customer specifications</p>
                    <p>Ensures that the right parts are cut</p>
                    <p>Is knowledgeable about industry trends and how it might affect the company</p>
                
                <h3>Sales and Marketing Team</h3>
                
                    <p>Conducts market research in order to determine more target markets for the organization</p>
                    <p>Drafts effective marketing strategies that will generate revenue for the organization</p>
                    <p>Conducts one-on-one marketing on behalf of the organization</p>
                
                <h3>Driver</h3>
                
                    <p>In charge of driving supplies to major customers</p>
                    <p>Ensures that the correct stock is taken to accurate destination</p>
                    <p>Carries out light maintenance on the vehicle when necessary.</p>
                
                </InnerPara>
            </Paracontainer>
        </Abtpara>
        <AbtcarCtner>
        <AbtCarouselcontainer>
            <Carousel showThumbs={false}>

            <AbtImgContainer src={require('../../assets/Aboutpics/abt1.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt2.jpg')} alt='heromeat'/>    
            <AbtImgContainer src={require('../../assets/Aboutpics/abt3.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt4.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt5.jpg')} alt='heromeat'/>
            <AbtImgContainer src={require('../../assets/Aboutpics/abt6.jpg')} alt='heromeat'/>
            
            </Carousel>
        </AbtCarouselcontainer>
        <Sustain>
            <InnerSustain>
            <h1>Company Sustainablity Approach</h1>
        <p>No one opens a business with the intention of having it fail in the end, which is why serious entrepreneurs lay plans that would ensure that the business remains sustained for as long as they want it and also expands as well.

There are several factors that every entrepreneur should look into if they intend to run their business for a long time, and such factors include; building a solid business structure, ensuring a high retention of customers as well as having a solid re-investment strategy.

Building a solid business structure is very vital to the growth of the business and as such we will ensure that we go all out to get the right employees with the right skill set to work in the various positions and handle the different responsibilities that will be assigned to them.

We will ensure that our employees are well paid and have several incentive packages aimed at motivating and ensuring that they put in their best for us. We will also carry out periodical performance appraisals in order to ensure that hardworking employees get promoted. Also, we will ensure that all our employees project the image of our company positively at all times.

Without our customers, we will not be able to generate the needed revenue that will help our business grow and due to this we intend to ensure that all our customers are well treated in such a way that will cause us to retain a high amount of customers to our business and allow us be the preferred butchery/meat shop here in Yangon – Myanmar.

We will also ensure that we reward loyal customers with discounts especially those who refer others to patronize our products and services.

Because we took a loan in order to be able to run our business, we will put in place effective strategies that will see us plough back a percentage of our earnings into our business in order to ensure that we have a solid financial base and bottom line and grow from there. We believe that the above three factors will be suitable for our expansion and efforts at sustaining the business for as long as we want it.
</p>
        </InnerSustain>
        </Sustain>
        </AbtcarCtner>

    <ContactForm />
    <Footer />
    
    </>
  )
}

export default About