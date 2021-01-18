import React, { Component } from 'react';
import Pulse from 'react-reveal/Pulse';
class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav" >
            <li className="current" ><a className="smoothscroll" href="#home" style={{fontSize:14}}>Home</a></li>
            <li><a className="smoothscroll" href="#about" style={{fontSize:14}}>About</a></li>
	         <li><a className="smoothscroll" href="#resume" style={{fontSize:14}}>Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio" style={{fontSize:14}}>Experience</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li><a className="smoothscroll" href="#contact" style={{fontSize:14}}>Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
          <Pulse><h2 className="responsive-headline" style={{color:"white",fontFamily:"Trebuchet MS, sans-serif"}}>Full-Stack Software Engineer</h2></Pulse>  
            <h3 className="responsive-headline" style={{fontSize:24, color:"white",fontFamily:"Trebuchet MS, sans-serif"}}> {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
