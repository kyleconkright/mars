import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './Routes';

//showcase site only
require('./../style/style');

//THE LIBRARY
require('./../MARS/mars.entry');

class App extends React.Component {
    render() {
        return <Routes />
    }
}

ReactDOM.render(<App />, document.getElementById('app'));