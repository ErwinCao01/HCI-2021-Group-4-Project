import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";


export default function RounterURL(props) {
    const { sections } = props;
    return (
        <div>
            <Router>
                <div>
                    {sections.map((section) =>
                    (<Route key={section.id} exact path={section.url} component={section.component} />
                    ))}
                </div>
            </Router>
        </div>
    );
}