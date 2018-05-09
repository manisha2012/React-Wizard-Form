import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../Validate/Validate';
import renderField from '../RenderField/RenderField';

const WizardFormTwo = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h5>Qualification Details</h5>
      <Field name="degree" type="text" component={renderField} label="Degree"/>
      <Field name="college" type="text" component={renderField} label="College"/>
      <Field name="year" type="text" component={renderField} label="Year"/>
      <div>
        <button type="button" className="previous mdl-button mdl-js-button mdl-button--raised mdl-button--accent" style={{marginRight: '15px'}} onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormTwo);
