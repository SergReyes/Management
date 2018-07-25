import React, { Component }  from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import NewsletterBox from './newsletterBox';
import ArchiveItem from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsLetterGrid extends Component {

    handleAddnewsletter = () => {
        this.props.history.push('/newsletter/new')
    }

    componentDidMount(){
        this.props.fetchNewsletters();
    }

    render(){
        
        const latest = {
            _id: '794',
            title: 'Happy Holidays',
            body: 'words words and lots of words',
            date: new Date(),
            imageUrl: 'https://via.placeholder.com/960x258'
        }
        return(
            <div className='newsletter-grid'>
                <Button className="newsletter-grid__button" icon="fas fa-plus" callback={() =>this.handleAddnewsletter()}/>
                <NewsletterBox {...this.props.latestNewsletter}/>
                <ArchiveItem/>
                <NewsletterLatest {...this.props.latestNewsletter}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {newsletters} = state.newsletters;
    const latestNewsletter = newsletters[0];
    return{
        latestNewsletter
    }
}

export default connect(mapStateToProps, actions)(NewsLetterGrid);