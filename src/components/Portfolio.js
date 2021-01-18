import React, { Component } from 'react';
import kiddo from './portfolio/kiddo.png';
import hotelcom from './portfolio/hotelcom.PNG'
import explorepalestine from './portfolio/explorepalestine.PNG'

var images = {
  kiddo,
  hotelcom,
  explorepalestine
} 
class Portfolio extends Component {
  render() {
    const styleRed = {fontSize:"18px"};
    if(this.props.data){
      var test = "https://www.w3schools.com"
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = './portfolio/'+projects.image;
        return <div key={projects.title} >
          
                  <div className="item-wrap" >
                    <div class="proj" style={{display:'inline-flex'}}>
                      <div  class="img" style={{flex:1, justifyContent:'center'}}>
                        <div  style={{ display:"flex",justifyContent:'center'}}>
                          <a href={projects.url} title={projects.title} target="_blank">
                            {projects.title === "kiddo"?<img alt={projects.title} src={images[projects.image]} style={{width:250}}/>  : <img alt={projects.title} src={images[projects.image]} style={{borderRadius:12}}/> }
                          </a>
                        </div>
                      </div>
                      <div class="parag" style={{flex:1,alignItems:'center',}}>
                        <a href={projects.url} title={projects.title} target="_blank">
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5 style={{fontSize:26,fontFamily:"URW Chancery L, cursive"}}>{projects.title}</h5>
                              <a href={projects.github} target="_blank"> <p  style={{fontFamily:"URW Chancery L, cursive",fontSize:18 }}>{projects.category} : github repositary</p></a>
                            </div>
                          </div>
                        </a>
                        <p style={{fontFamily:"URW Chancery L, cursive",fontSize:18 }}>Technologies: {projects.technologies}</p>
                        <p style={{fontSize:18 ,textAlign: 'justify',textJustify: 'inter-word', fontFamily:"URW Chancery L, cursive"}}>{projects.description}</p>
                         {projects.title === "kiddo"?<label id="submit-div" style={{borderRadius:6, border: "1px solid white", width:'30%'}}><a href="https://www.youtube.com/watch?v=Vg748ApTsuI&feature=youtu.be&ab_channel=RazanAbusamra" target="_blank">Demo Video</a></label>:
                        <></> }
                      </div> 
                      </div>
                      <br></br>
                      <br></br>
                    <div className="link-icon"><a href={projects.url}  target="_blank"><i className="fa fa-link" ></i></a></div>
                  </div>
            </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1 style={{fontSize:26, fontFamily:"URW Chancery L, cursive"}}>Check Out My Work</h1> 
            <p style={styleRed} style={{fontSize:18, color:'white',  padding:'7%', alignContent:'center',fontFamily:"URW Chancery L, cursive"}} >          Through <b> ReBootKamp </b>experience, as team we worked on these projects:                  </p>
            <br></br>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" style={{color:'white', fontSize:16}}>
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
