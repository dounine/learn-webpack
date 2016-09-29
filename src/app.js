import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';
require('style!css!./style.css');
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import AppBar from 'material-ui/AppBar';
injectTapEventPlugin();

const AppBarExampleIcon = () => (
	<AppBar
		title="Title"
		iconClassNameRight="muidocs-icon-navigation-expand-more"
	/>
);
const App = () => (
	<MuiThemeProvider>
		<MyAwesomeReactComponent />
	</MuiThemeProvider>
);


ReactDOM.render(
	<App />,
	document.getElementById('app')
);