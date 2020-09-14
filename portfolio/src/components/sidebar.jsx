import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/img_bg.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Srinithi Ramachandran</a></h1>
              <span className="designation">Full Stack Developer </span>
              <span className="email"><i className="icon-mail"></i> srinithi.ramachandran@gmail.com</span><br/>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="education">Education</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  
                  <li><a href="#timeline" data-nav-section="experience">Experience</a></li>
                  <li><a href="#timeline" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100000651824186" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/srinithi_r/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/srinithi-ramachandran-815892120/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/srinithi95" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                
              </ul>
            </nav>
            
          </aside>
        </div>
      </div>
    )
  }
}
