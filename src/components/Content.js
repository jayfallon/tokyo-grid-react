import React from 'react';
import {Link} from 'react-router';

class Content extends React.Component {
	render() {
		return (
			<div className="container">
				<Link to="/About">About</Link>
			</div>
		);
	}
}

export default Content;
