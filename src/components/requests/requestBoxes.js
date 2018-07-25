import React, { Component } from 'react';
import RequestsBox from './requestBox';

class RequestsBoxes extends Component{
    render(){
        return(
            <div className='requests-boxes'>
                <RequestsBox title={'Pending'} count={5}/>
                <RequestsBox title={'In-Progess'} count={2}/>
                <RequestsBox title={'Complete'} count={1}/>
            </div>
        )
    }
}

export default RequestsBoxes;