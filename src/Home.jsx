import React from 'react';
import imgsrc from './transparent-cartoon-clip-art-credit-repair-service-venture-credit5d65b2e571c984.3358530915669460214661.png';
 
 const Home=()=>{
     return(<>
     <div className='container-fluid ' >
         <div className='row'>
         <div className='col-10 mx-auto'>
         <div className="row">
            <div className='col-md-6 mt-5  pt-lg-3 order-2 order-lg-1 text-primary  my-auto header text-left'>
              <p >G'Day,</p>
              <p>I'm Shraddha..!</p>
              <p >I' am Web developer..! </p>

            </div>
            <div className='col-lg-6  order-lg-2 order-1 header-img '>
            <img src={imgsrc} className="img-fluid "alt="web image"/>
            </div>
            </div>
            </div>
         </div>
    </div>    
     </>)
 }
 export default Home;