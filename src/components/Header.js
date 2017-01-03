import React from 'react';

class Header extends React.Component {
  render() {
    return (
      	<header>
			<h3 className="title">{this.props.title}</h3>
			<p className="tagline">{this.props.tagline}</p>
		</header>
    );
  }
}


export default Header;
