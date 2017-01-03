import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Ticket from "./Ticket";
import { getFunName } from '../helpers';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Ticket title="Maron" tagline="A Boston, Mass. original" />
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
