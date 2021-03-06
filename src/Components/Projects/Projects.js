import React, { Component } from 'react';

import ProjectTabs from './ProjectTabs';

class Projects extends Component {
  render() {
    return (
      <section id="portfolio">

        {/* Nav Bar */}
        <nav id="nav-wrap" className="compNav">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li><a className="smoothscroll" href="#home" onClick={this.props.frontpageHandler}>Home</a></li>
            <li><a className="smoothscroll" href='#about' onClick={this.props.aboutHandler}>About</a></li>
            <li><a className="smoothscroll" href='#resume' onClick={this.props.resumeHandler}>Resume</a></li>
            <li className="current"><a className="smoothscroll" href="#projects" onClick={this.props.projectHandler}>Projects</a></li>
            <li><a className="smoothscroll" href="#food" onClick={this.props.foodHandler}>Food</a></li>
          </ul>

        </nav>

        <div id="home"></div>

        <div className="row">

          <h1> Personal & Professional Projects </h1>

          <ProjectTabs/>

        </div>
      
      </section>
    );
  }
}

export default Projects;
