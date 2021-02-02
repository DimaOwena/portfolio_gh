import React, { Component } from 'react';
import cv from './portfolio/cv.png'
class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
              <li key={8}><a href="https://drive.google.com/file/d/1Fudr3x778Uxic5GWyznRCJBM-X_KBzK3/view?usp=sharing" style={{}} target="_blank" ><i><img src={cv} style={{marginBottom:-5}} alt=""/></i></a></li>
             
           </ul>

           {/* <ul className="copyright">
              <li>&copy; Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/"></a></li>
           </ul> */}

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
