import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component{

    render(){
        return(
            <div className='requests-item'>
                
                <Icon icon='fas fa-exclamation-triangle' className='requests-item__icon'/>
                <div className='requests-item__title'>
                    This sucks
                </div>
                <div className='requests-item__tenant-unit'>
                    No one
                </div>

                <Icon className='requests-item__arow' icon='fas fas-dort-down'/>
                <div className='requests-item__date'>
                    A date
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => }/>
                <div classname='requests-item__description'>
                    <img src="https://via.placeholder.com/160x94"
                    className='requests-item__description-img'/>
                    <p className='requests-item__description-text'>
                    </p>
                </div>
            </div>
        )
    }
}

export default RequestsItem;