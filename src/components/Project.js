import React from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import Ticket from "./Ticket";
import { getFunName } from '../helpers';

class Project extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Ticket tagline="Boston, Massachusetts" />
        <Header title={getFunName()} tagline="jayfallon@gmail.com" />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default Project;
