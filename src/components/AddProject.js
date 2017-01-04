import React from 'react';
import Inventory from './Inventory';

class AddProject extends React.Component {
	render() {
		return(
			<Inventory addFish={this.addFish} loadProjects={this.loadProjects} />
		)
	}
}

export default AddProject;
