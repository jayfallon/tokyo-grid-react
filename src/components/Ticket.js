import React from 'react';

const Ticket = (props) => {
	return (
		<div className="ticket">
		  <span>{props.title}</span>{props.tagline}
		</div>
	)
}

export default Ticket;
