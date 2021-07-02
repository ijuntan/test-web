import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import Tasks from './Tasks';

function Navigation() {
    return(
        <Switch>
            <Route path = '/' exact component = { Dashboard }/>
            <Route path = '/dashboard' component = { Dashboard }/>
            <Route path = '/calender' component = { Dashboard }/>
            <Route path = '/tasks' component = { Tasks }/>
            <Route path = '/classroom' component = { Dashboard }/>
            <Route path = '/account' component = { Dashboard }/>
        </Switch>
    )
}

export default withRouter(props => <Navigation {...props}/>);