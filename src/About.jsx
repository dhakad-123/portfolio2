import React from 'react';
import myprofile from './profile.jpg';

 const About=()=>{
     return(
         
         <>
         <section className="about mb-0 container-fluid" id="about">
         <div className='row' >
         <div className='col-10 mx-auto '>
            <div className='row text-justify pt-sm-4'>
            <div className='col-lg-4 col-md-6  col-sm-10  pe-5 pt-5'>
            <h3 style={{color:"rgb(165, 25, 25)"}}>About</h3>
            <h2>Who is Shraddha..!</h2>
            <img src={myprofile}  style={{width:"60%",height:"75%",marginLeft:"90px",paddingTop:"45px"}}  alt="my profile image" className=''/>
            </div>
            <div className='col-lg-8 col-6 ml-0   pt-5 pb-5 ps-5 '>
            <h3 style={{color:"rgb(146, 114, 177)"}}>A curiosity-driven Front-End Developer with design chops.</h3>
            <br/>
            <hr/>
            <h4>I have diploma in computer engineering from pune university,a certificate of diploma from Gpp(Government polytechnic pune) college.</h4>
            <h4>I'm passionate about  bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details.</h4>
            <h4>I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. I'm not available for any freelance work, but feel free to reach out and say hello! I promise I don't bite 😉</h4>
            </div>
        </div>
         </div>
         </div>
    </section>

         </>
     )
 }
 export default About;