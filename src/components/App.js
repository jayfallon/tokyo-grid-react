import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Ticket from "./Ticket";
import { getFunName } from '../helpers';
import sampleProjects from '../../sample-projects.js';
import {Link} from 'react-router';

class App extends React.Component {
  render() {
    // loadSamples() {
    //   fishes: 
    // }
    return (
      <div className="wrapper">
        <Ticket tagline="Boston, Massachusetts" />
        <Header title={getFunName()} tagline="jayfallon@gmail.com" />
        <Content />
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
