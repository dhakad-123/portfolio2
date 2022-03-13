import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import {Switch,Route,Redirect} from 'react-router-dom';
import NavBar from './NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';

function App (){
  
  return(<>
  
  <NavBar />
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/projects' component={Projects}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/contact' component={Contact}/> 
    <Redirect to=''/> 
    </Switch>
   <Footer/> 
  </>
    
  );

}
export default App;
