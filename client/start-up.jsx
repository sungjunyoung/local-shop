/**
 * Created by junyoung on 2017. 5. 14..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {Meteor} from 'meteor/meteor';

// Base Component

import Main from './components/main/main'

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('#render-target'));
});

const routes = (
    <Router>
        <Route path="/" component={Main}/>
    </Router>
);