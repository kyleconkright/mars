import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from '../Components/Nav.component';
import Item from './../Components/Item.component';
import Color from '../Components/Color.component';
import Typography from '../Components/Typography.component';
import Button from '../Components/Button.component';
import Panel from '../Components/Panel.component';
import Card from '../Components/Card.component';
import NoMatch from './NoMatch.compontent';

export default () => {
    return (
        <BrowserRouter>
            <main>
                <header>
                    <h1 className="mars-font">MARS</h1>
                </header>
                <Nav />
                <div id="content">
                    <Switch>
                        <Route path="/" exact render={(props) => <Item {...props} />} />
                        <Route path="/color" exact render={(props) => <Color {...props} />} />
                        <Route path="/typography" exact render={(props) => <Typography {...props} />} />
                        <Route path="/button" exact render={(props) => <Button {...props} />} />
                        <Route path="/card" exact render={(props) => <Card {...props} />} />
                        <Route path="/panel" exact render={(props) => <Panel {...props} />} />
                        <Redirect from="/sup" to="/sup/1" />
                        <Route component={ NoMatch } />
                    </Switch>
                </div>
                <footer>MARS by EVENT FARM</footer>
            </main>
        </BrowserRouter>
    )
}
