import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './Routes';
require('./../style/style');

class App extends React.Component {
    render() {
        return <Routes />
    }
}

ReactDOM.render(<App />, document.getElementById('app'));