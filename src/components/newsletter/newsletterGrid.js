import React, { Component }  from 'react';
import NewsletterBox from './newsletterBox';

class NewsLetterGrid extends Component {
    render(){
        return(
            <div className='newsletter-grid'>
                <NewsletterBox date={new Date()}/>
            </div>
        )
    }
}

export default NewsLetterGrid;