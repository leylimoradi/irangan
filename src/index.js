import React from "react";
import ReactDOM from "react-dom";
import {Fragment} from 'react';

import Head from './components/header';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/styles.css';


class Header extends React
    .Component {
        render() {
            return (<Fragment>
                <Head/>
            </Fragment>)
        }
    }

    ReactDOM
    .render(
        <Header/>,
        document.body.appendChild(document.createElement('header')),
);
    
class MainD extends React
    .Component {
    render() {
        return (<Fragment>
            <Main />
        </Fragment>)
    }
}

ReactDOM
    .render(
        <MainD />,
        document.body.appendChild(document.createElement('main')),
    );
