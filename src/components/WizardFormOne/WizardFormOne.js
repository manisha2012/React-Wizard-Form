import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../Validate/Validate';
import renderField from '../RenderField/RenderField';

const WizardFormOne = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h5>Personal Details</h5>
      <Field name="firstName" type="text" component={renderField} label="First Name"/>
      <Field name="middleName" type="text" component={renderField} label="Middle Name"/>
      <Field name="lastName" type="text" component={renderField} label="Last Name"/>
      <Field name="dob" type="date" component={renderField} label="Date Of Birth"/>
      <Field name="email" type="email" component={renderField} label="Email Id" />
      <button type="submit" className="next mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Next</button>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormOne);
