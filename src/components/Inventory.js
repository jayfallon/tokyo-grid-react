import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="">
		<AddFishForm addFish={this.props.addFish} />
		<button onClick={this.props.loadProjects}>Load Sample</button>
      </div>
    );
  }
}

export default Inventory;
