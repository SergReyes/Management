import React, { Component } from 'react';
import NewNewsletterForm from './newsletterNewForm'


class NewNewsletter extends Component{

    onCancel = () => {
       if(button == 'cancel'){
           
       }
       this.props.history.push('/dashboard')
    }

    render(){
        return(
            <div className="new-newsletter">
                <NewNewsletterForm onCancel={(event) => this.onCancel()} onSubmit={(event) => this.onSubmit}/>
            </div>
        )
    }
}

export default NewNewsletter;