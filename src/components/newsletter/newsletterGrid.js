import React, { Component }  from 'react';
import NewsletterBox from './newsletterBox';
import ArchiveItem from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsLetterGrid extends Component {
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
                <NewsletterBox date={new Date()}/>
                <ArchiveItem/>
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsLetterGrid;