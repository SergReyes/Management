import React, { Component } from 'react';
import {Header, Bar} from './header';

class Layout extends Component {
    render() {
        return (
          <div className="layout-grid">
            <Header/>
            <Bar/>
            {this.props.children}
            </div>
        )
    }
}

export default Layout;