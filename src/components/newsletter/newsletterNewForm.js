import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton, FormTextArea, FormImage } from "../formFields";

class NewNewsletterForm extends Component {

  render() {

    const { handleSubmit, formTitle, newsletterToEdit } = this.props;
    const { 
        fieldOnePLaceholder, fieldOneTitle,
        fieldTwoPlaceholder, fieldTwoTitle
    
      } = this.props;


    return (
      <form onSubmit={handleSubmit} className="new-newsletter-form">
        <FormTitle className="new-newsletter__title" text={title} />
        <Field
          className="new-newsletter-form__-newsletter-title"
          placeholder={fieldOnePLaceholder}
          name="title"
          type="text"
          title={fieldOneTitle}
          component={FormInput}
          
        />
        <Field
          className="new-newsletter-form__body"
          placeholder={fieldTwoPlaceholder}
          name="body"
          type="text"
          title={fieldOneTitle}
          component={FormTextArea}
         
        />
        <Field
          className="new-newsletter-form__submit"
          small={true}
          danger={true}
          name="Submit"
          type="submit"
          title="Submit"
          component={FormButton}
        />
        <Field
          className="new-newsletter-form__cancel"
          small={true} 
          name="submit"
          type="button"
          title="Cancel"
          component={FormButton}
          onClick={this.props.onClick}
        />
        <Field
          className="new-newsletter-form__image"
          small={true} 
          name="image"
          type="file"
          title="Image"
          component={FormImage}
        />
      </form>
    );
  }
}

NewNewsletterForm = reduxForm({
  form: "newnewsletter"
})(NewNewsletterForm);

export default NewNewsletterForm;