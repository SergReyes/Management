import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Icon from '../Icon';

class RequestsBox extends Component {
    render(){
        const {count, title} = this.props;
        const className = `requests-box ${this.props.selectedRequestType == title ? 'requests-box-active' : 'requests-box-inactive'}`
        return(
            <a onClick={() => this.props.changeSelectedRequestType(title)} className={className}>
                <div className="requests-box__count">{count}</div>
                <div className="requests-box__title">{title}</div>
                <div className="requests-box__point"></div>
                <i className={`${Icon} requests-box__icon`}></i>
            </a>
    )
    }
}

function MapStateToProps(state){
    const { selectedRequestType } = state.requests;
    return {
        selectedRequestType
    };

}

RequestsBox = connect(MapStateToProps, actions)(RequestsBox);

export default RequestsBox;