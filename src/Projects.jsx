
import React from 'react';
import Cards from "./Cards";
import Data from "./Data";

 const Projects=()=>{

     return(<><h1 className='text-center font-weight-bold p-4 text-warning' >Projects</h1>
     <br/>
     <div className="container-fluid mb-5">
        <div className='row'> 
            <div className='col-10 mx-auto'> 
                <div className='row '> 
                    
                        {
                        Data.map((val,index)=>{
                            return(<Cards card_img={val.imgsrc} card_title={val.title} card_text={val.prj_text} href_src={val.prj_src} />)
                        })
                        }
                    
                </div>        
            </div>
        </div>            
     </div>
     </>
     );
 }
 export default Projects;