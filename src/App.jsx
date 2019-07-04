import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Count from './modules/counts/counts.component';
import './App.scss';

class Apps extends Component {

    render() {
        return (
            <Router>
                <Route path="/count" exact component={Count} />
                <Route exact component={Count} />
            </Router>
        )
    }
}

export default Apps;
