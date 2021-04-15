import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
const home = asyncComponent(() => import('@/pages/home/home'));

export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={home} />
                    {/* <Route path="/login" component={login} />
                    <Route path="/info" component={info} />
                    <Route path="/msite" component={msite} />
                    <Route path="/setuser" component={setUser} />
                    <Route path="/shop/:id" component={shop} />
                    <Route path="/food/:geohash/:id/:title" component={food} />
                    <Route path="/technology" component={technology} />
                    <Redirect exact from="/" to="/profile" />
                    <Route component={profile} /> */}
                </Switch>
            </HashRouter>
        );
    }
}
