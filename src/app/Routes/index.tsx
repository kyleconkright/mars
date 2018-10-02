import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Item from './../Components/Item.component';
import NoMatch from './NoMatch.compontent';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => 'hey'} />
                <Route path="/sup/:id" exact render={(props) => <Item {...props} />} />
                <Redirect from="/sup" to="/sup/1" />
                <Route component={ NoMatch } />
            </Switch>
        </BrowserRouter>
    )
}
