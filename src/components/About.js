import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Ticket from "./Ticket";

class About extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Ticket title="Boston" tagline="Story" />
        <Header tagline="The one page about me." />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default About;
