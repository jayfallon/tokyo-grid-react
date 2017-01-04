import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import Project from './components/Project';
import NotFound from './components/NotFound';
import About from './components/About';
import AddProject from './components/AddProject';

import './index.css';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match exactly pattern="/about" component={About} />
				<Match exactly pattern="/add-project" component={AddProject} />
				<Match pattern="/project/:projectId" component={Project} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#root'));
