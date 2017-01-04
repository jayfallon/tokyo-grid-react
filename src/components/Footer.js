import React from 'react';

class Footer extends React.Component {
	render() {
		return(
			<footer className="footer">
				<div className="footer-items">
					<p>Manufactured in Boston, Mass. with ReactJS, webpack, Babel, Gulp, JSX, PostCSS and ElbowGrease&trade;.</p>
					<p>
					<a rel="external" target="_blank" href="https://github.com/jayfallon/tokyo-grid-react">Read the code on GitHub</a>
					</p>
				</div>
			</footer>
		);
	}
}


export default Footer;
