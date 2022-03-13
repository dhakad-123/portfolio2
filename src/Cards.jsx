import React from 'react';


 const Cards=(props)=>{
    return(
      <>
      <div className="col-md-4 col-lg-3 ml-4">
          <div className="card mx-auto">
                <img className="card-img-top" src={props.card_img} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{props.card_title}</h5>
                  <p className="card-text">{props.card_text}</p>
                  <a href={props.href_src} className="btn btn-primary">Go to souce code</a>
               </div>
          </div>
    </div>
    </>
    
      
    );
 }
 export default Cards;