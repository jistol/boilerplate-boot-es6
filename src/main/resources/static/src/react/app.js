'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/app.scss';

class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            canvasColor: 'default'
        };
    }

    changeColor(color) {
        this.setState({ canvasColor: color });
    }

    render() {
        let _self = this;
        return (
            <div>
                <div id={this.props.name} className={this.state.canvasColor}>Change Color</div>
                <a class="btn btn-danger" onClick={e => _self.changeColor('red')}>Red</a>
                <a class="btn btn-primary" onClick={e => _self.changeColor('blue')}>Blue</a>
                <a class="btn btn-success" onClick={e => _self.changeColor('green')}>Green</a>
                <a class="btn btn-default" onClick={e => _self.changeColor('default')}>Default</a>
            </div>
        );
    }
}

ReactDOM.render(
    <App name="canvas"/>,
    document.getElementById('root')
);