import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Ticket from "./Ticket";

class NotFound extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Ticket title="" tagline="A Boston, Mass. original" />
        <Header tagline="404: You have found a missing page!" />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default NotFound;
