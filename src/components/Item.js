import React from 'react';

class Item extends React.Component {

	render() {
		const { details } = this.props;
		return(
			<div className="item">
				<div className="item-content">
					<div className="item-photo">
						<img src={details.image} alt=""/>
					</div>
					<div className="item-text">
						<h2>{details.url}</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default Item;
