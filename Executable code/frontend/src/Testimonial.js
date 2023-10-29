import React from 'react'
import { useState } from 'react';
import "./Testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from '@material-ui/core';
import image1 from "./prady.jpg";
import image2 from "./Div.jpeg";
import image3 from "./jatin.jpg"
import image4 from "./shashank.jpeg"
import { ArrowBackIos, ArrowForwardIos, ViewCarousel } from '@material-ui/icons';

const PreviousBtn=(props)=>{
  console.log(props);
  const {className,onClick}=props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{color:"gray",fontSize:"45px"}} />
    </div>
  );
};

const NextBtn=(props)=>{
  console.log(props);
  const {className,onClick}=props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{color:"gray",fontSize:"45px"}} />
    </div>
  );
};


const Testimonial = () => {
  return (
    <div className='testimonial' style={{display:"flex",justifyContent:"center"}}>
    <div style={{width:"50%",textAlign:"center"}}>

      <h1 className="header" style={{marginTop:50,marginBottom:50,color:"darkslategray",fontFamily:'cursive'}}>TESTIMONIALS</h1>
      <Slider
      prevArrow={<PreviousBtn></PreviousBtn>}
      nextArrow={<NextBtn></NextBtn>}
      dots
      >
        <Card 
        img={image1} 
        content={<q> Hello, I'm Pradyumn Seth, a recent frontend development graduate with a passion for creating visually stunning websites and applications. I was fortunate enough to work with Zemosolabs Technologies on a demo project, and I'm excited to share how the experience helped me gain practical knowledge and confidence in my skills. </q>}
        name={"PRADYUMN SETH"}
        post={"Frontend Developer"}
        />
        <Card 
        img={image2} 
        content={<q> Hi, I'm Divyanshi Srivastava, a recent graduate with a degree in computer science and a passion for backend development. I recently had the opportunity to work on a project with Hanu Insight, and I'm excited to share my experience and how it helped me grow as a backend developer. </q>}
        name={"DIVYANSHI SRIVASTAVA"}
        post={"Backend Developer"}
        />
        <Card 
        img={image3} 
        content={<q> Hello, I'm Jatin Verma, a backend developer with a strong foundation in computer science principles and a passion for building robust systems. I recently had the opportunity to work with TCS on a project, and I'm excited to share how the experience helped me grow as a developer and learn new skills. </q>}
        name={"JATIN VERMA"}
        post={"Backend Developer"}
        />
        <Card 
        img={image4} 
        content={<q> Hi there, I'm Shashank Dubey, a self-taught frontend developer who is passionate about creating user-friendly and responsive websites. I had the opportunity to work with Infosys on a project, and I'm excited to share how the experience helped me grow as a developer and learn new skills. </q>}
        name={"SHASHANK DUBEY"}
        post={"Frontend Developer"}
        />
      </Slider>
    </div>
    </div>
  )
}

const Card=({img,content,name,post})=>{
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return(
    
    <div style={{paddingTop:30,display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",color:"white",backgroundColor:"darkslategray",borderRadius:20,margin:10}}>
      <Avatar 
      imgProps={{style:{borderRadius:"50%"}}}
      src={img} style={{ width:120, height:120,border:'1px solid white',padding:7,marginBottom:20,marginTop:20}}/>
      <p style={{padding:"0 50px 0 50px"}}>
        {content}
        <p style={{fontStyle:"italic",marginTop:25}}>
          <span style={{fontWeight:500,color:"darkseagreen"}}>{name}</span> , {post}</p>
      </p>
  
  
    <div className="star-rating" style={{paddingBottom:"30px"}}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  
    </div>
  )
}
export default Testimonial