import React from 'react';
import classes from './RenderField.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  if(type === 'textarea') {
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <textarea {...input} className="mdl-textfield__input" type="text" rows= "3"></textarea>
        <label className="mdl-textfield__label">{label}</label>
      </div>
    )
  } else {
    return (
      <div>
        <div className={[classes.mdlTextField, 'mdl-textfield', 'mdl-js-textfield', 'mdl-textfield--floating-label'].join(' ')}>
          <input {...input} className={[classes.mdlTextFieldInput, 'mdl-textfield__input'].join(' ')} type={type}/>
          <label className="mdl-textfield__label">{label}</label>
          {touched && error && <span style={{color: 'red'}}>{error}</span>}
        </div>

      </div>
    )
  }
}

export default renderField;
