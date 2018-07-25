import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import NewsletterBox from './newsletterBox';
import NewsletterDetail from './newsletterLatest';
import {FormTitle} from '../formTitle';
import { formButton } from '../formFields';

class NewsletterDetail extends Component{

    componentDidMount(){
        this.props.fetchNewsletterWithId(this.props.match.params.id);
    }

    render(){
        
        return(
            <div className='newletter-detail'>
            <FormTitle className='mewsletter-detail__title' text="Newsletter Archive"/>
            <NewsletterBox date={this.props.newsletterToEdit.date}/>
            <NewsletterLatest {...this.props.newsletterToEdit}/>
            <formButton 
                className='newsletter-detail__cancel'
                small={true}
                onClick={() => this.props.history.push('/dashboard')}
                title='Cancel'/>

            </div>
        )
    }
}

function mapStateToProps(state){
    const {newsletterToEdit} = state.newsletters
    return { newsletterToEdit }
}

export default connect(mapStateToProps)(NewsletterDetail);