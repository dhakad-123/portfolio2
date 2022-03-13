import React from 'react';
import Contact_logo from './Contact_logo';

 const Contact=()=>{
     return(<>
     
<section className="mb-4 container">
<div className='row'>
    <div className='col-8'>
    <h1 className="h1-responsive font-weight-bold text-left my-4 pt-4 pb-2 text-danger ">Get in touch</h1>
   
    <p className="text-left w-responsive mx-auto mb-5 " style={{fontSize:"25px"}}>Dropping a line to say g’day, ask for my resume or see if we can build <br/>something amazing together? I’d love to hear from you!

Fill in your info<br/> in the form below and I look forward to hearing from you!</p>
</div>
<div className='col-4  my-auto'>
<input type="text" className='mt-5  container-fluid p-2 ' placeholder='Name' ></input><br/>
<input type="text" className='mt-4 container-fluid p-2 ' placeholder='Email' ></input>
<textarea type="text" className='mt-4 container-fluid p-4  ' placeholder='Message'></textarea>
<button type='submit' className='mt-4  p-2 btn btn-dark  mx-auto ms-0'>Send Email</button>
</div>
</div>
</section>
<Contact_logo/>
</>)
 }
 export default Contact;