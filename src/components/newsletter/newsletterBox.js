import React from 'react';
import { connect } from 'redux-redux';


const months = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
]

class NewsletterBox extends Component {
    render(){
        const { date } = this.props;
        return(
            <div className="newsletter-box">
                <div className="newsletter-box__day">{date.getDate()}</div>
                <div className="newsletter-box__month-year"> {months[date.getMonth()]} {date.getFullYear()} </div>
                <div className="newsletter-box__point"></div>
            </div>
    )
    }
}

// function mapStateToProps(state){
//     const {newsletters} = state.newsletters;
//     const latestNewsletters = newsletters[0];
//     return{
//         ...latestNewsletters
//     }
// }

export default connect(mapStateToProps)(NewsletterBox);