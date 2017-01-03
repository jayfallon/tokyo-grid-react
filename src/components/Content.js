import React from 'react';
import { getFunName } from '../helpers';

class Content extends React.Component {
	constructor() {
		super();
		this.gotToProject = this.gotToProject.bind(this);
	}
	

	gotToProject(e) {
		e.preventDefault();
		console.log('You have changed the url');
		//first grab text from the box
		console.log(this.projectInput.value);
		const projectId = this.projectInput.value;
		// second transition from / to /item-name
		this.context.router.transitionTo(`/project/${projectId}`);
	}

	render() {
		return (
			<div className="container">
				<div className="items">
					<button onClick={this.loadSamples}>Load Data</button>
					<form onSubmit={this.gotToProject}>
						<h2>Please click</h2>
						<input ref={(input) => {this.projectInput = input}} type="text" required placeholder="Store name" defaultValue={getFunName()} />
						<button type="submit">Click</button>
					</form>
				</div>
			</div>
		);
	}
}

Content.contextTypes = {
	router: React.PropTypes.object
}

export default Content;
