import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Ticket from './Ticket';
import Inventory from './Inventory';
import Item from './Item';
import { getFunName } from '../helpers';
import sampleProjects from '../../sample-projects.js';

class App extends React.Component {

  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadProjects = this.loadProjects.bind(this);
    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    //update state
    const fishes = {...this.state.fishes};
    // add in our new fish 
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // add state
    this.setState({ fishes });
  }

  loadProjects() {
    this.setState({
      fishes: sampleProjects
    });
  }


  render() {
    return (
      <div className="wrapper">
        <Ticket tagline="Boston, Massachusetts" />
        <Header title={getFunName()} tagline="jayfallon@gmail.com" />
        <Inventory addFish={this.addFish} loadProjects={this.loadProjects} />
        <div className="container">
          <div className="items">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Item key={key} details={this.state.fishes[key]} />)
                .reverse()
            }
          </div>
        </div>
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
