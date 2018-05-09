import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../Validate/Validate';
import renderField from '../RenderField/RenderField';

const WizardFormThree = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h5>Contact Details</h5>
      <Field name="contactNo" type="text" component={renderField} label="Contact Number"/>
      <Field name="city" type="text" component={renderField} label="City"/>
      <Field name="address" type="textarea" component={renderField} label="Permanent Address"/>
      <Field name="country" type="text" component={renderField} label="Country"/>
      <div>
        <div>
          <Field name="verified" id="verified" component="input" type="checkbox"/>
        </div>
        <label htmlFor="verified">I verify that the information provided is valid. </label>
      </div>
      <div>
        <button type="button" className="previous mdl-button mdl-js-button mdl-button--raised mdl-button--accent" style={{marginRight: '15px'}} onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThree);
