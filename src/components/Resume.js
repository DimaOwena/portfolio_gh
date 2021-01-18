import React, { Component } from 'react';
import Javascript from './portfolio/Javascript.png';
import CSS from './portfolio/CSS.png';
import HTML from './portfolio/HTML.png';
import Java from './portfolio/Java.png';
import JQuery from './portfolio/JQuery.png';
import ReactJs from './portfolio/ReactJs.png';
import Python from './portfolio/Python.png';
import MySQL from './portfolio/MySQL.png';
import MongoDB from './portfolio/MongoDB.png';
import Git from './portfolio/Git.png';
// import  from './portfolio/';
// import  from './portfolio/';

var imgsObj = {
  Java,
  Javascript,
  HTML,
  CSS,
  Git,
  MongoDB,
  MySQL,
  Python,
  JQuery,
  ReactJs

}
class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var experience = this.props.data.experience.map(function(experience){
        return <div key={experience.company}><h3>{experience.company}</h3>
            <p className="info">{experience.title}<span>&bull;</span> <em className="date">{experience.duration}</em></p>
            <p style={{color:'black'}}>{experience.description}</p>
            <p>{experience.feeling}</p>

        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        // if(skills.name === 'Javascript'){
        //   return <li id="skilllist" key={skills.name} style={{color:'black'}}><img src={Javascript} alt="opppps"/> <em style={{fontSize:18}}>{skills.name}</em></li>
        // }else{
        return <li id="skilllist" key={skills.name} style={{color:'black'}} style={{display:'flex', alignItems:'center'}}> <img src={imgsObj[skills.name]} alt="" style={{marginRight:4}}/><em style={{fontSize:16, color:'black'}}>{skills.name}</em></li>
        // }
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1 style={{fontSize:20}}><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work" >

         <div className="three columns header-col">
            <h1 style={{fontSize:20}}><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col" style={{color:'black', fontSize:18,textAlign:"justify",textJustify: "inter-word"}}>
          {experience}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1 style={{fontSize:20}}><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col" >

            <p style={{color:'	#585858', fontSize:16}}>{skillmessage}
            </p>

				<div >
				   <ul className="skills unskills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
