import React, { Component } from 'react';
//https://mail.google.com/mail/u/0/?view=cm&fs=1&to=dima.owens@gmail.com&su=SUBJECT&body=BODY&tf=1
//take the nody, take the subject, fill inside the link, and anchor it to submit , 
class Contact extends Component {
   constructor(props){
      super(props)
      this.state={
         contactSubject: '',
         contactMessage:''
      }
   }
  sendEmail=()=>{
   window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=dima.owens@gmail.com&su=${this.state.contactSubject}&body=${this.state.contactMessage}&tf=1`, "_blank")
  }

  handleChange= (e)=>{
     
     this.setState({
      [e.target.name] : e.target.value
     })
   
   console.log(e.target.value)
  }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }
   
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>


                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"  onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                     {/* <button className="submit" onClick={this.sendEmail}>Submit</button>  */}
                     <a href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=dima.owens@gmail.com&su=${this.state.contactSubject}&body=${this.state.contactMessage}&tf=1`} >submit</a>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error sending</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Phone</h4>
					   <p className="address">
						   {name}<br/>
						   <span>{phone}</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
