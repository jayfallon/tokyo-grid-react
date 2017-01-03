import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Ticket from "./Ticket";

class NotFound extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Ticket title="404" tagline="Page Not Found" />
        <Header tagline="404: You have found a missing page!" />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default NotFound;
