import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    const styleRed = {fontSize:"18px"};
    if(this.props.data){
      var test = "https://www.w3schools.com"
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} >
           <div className="item-wrap">
           
            <a href={projects.url} title={projects.title}>
              <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                 {console.log(projects.gethub)}
                 <a href={projects.github} target="_blank"> <p>{projects.category} : github repositary</p></a>
                  </div>
                </div>
               <img alt={projects.title} src={projectImage} />
            
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>
            <pre style={styleRed}>          Through the 4+ months of the <b> ReBootKamp </b>experience, as team we worked on these projects:                  </pre>
            <br></br>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
