import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row" >
         {/* <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div> */}
         <div className="nine columns main-col">
            <h2 style={{fontFamily:"URW Chancery L, cursive", fontSize:26, marginBottom:40}}>About Me</h2>

            <p style={{color:'white', textAlign: 'justify',textJustify: 'inter-word', fontSize:18, fontFamily:"URW Chancery L, cursive"}}>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2 style={{fontFamily:"URW Chancery L, cursive", fontSize:26, marginTop:30, marginBottom:40}}>Contact Details</h2>
                  <p className="address">
						   <span style={{color:'white',fontFamily:"URW Chancery L, cursive", fontSize:18}}>{name}</span><br />
						   <br />
						   <span style={{color:'white',fontFamily:"URW Chancery L, cursive", fontSize:18}}>{phone}</span><br />
                     <span style={{color:'white',fontFamily:"URW Chancery L, cursive", fontSize:18}}>{email}</span>
					   </p>
               </div>
               {/* <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div> */}
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
