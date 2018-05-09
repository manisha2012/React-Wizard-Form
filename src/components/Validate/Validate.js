const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First Name is mandatory';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if(!values.degree) {
    errors.degree = 'Degree is mandatory';
  }
  if(!values.verified) {
    errors.verified = 'Please verify your details';
  }
  return errors;
};

export default validate;
