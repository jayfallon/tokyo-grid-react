import React from 'react';
import { Link } from 'react-router';

const Ticket = (props) => {
	return (
		<div className="ticket">
			<Link to="/">
				<div className="ticket-logo"></div>
			</Link>
			<div className="ticket-text">
				<span>{props.title}</span>{props.tagline}
			</div>
		</div>
	)
}

export default Ticket;
