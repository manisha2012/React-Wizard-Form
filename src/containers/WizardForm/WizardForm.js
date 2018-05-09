import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormOne from '../../components/WizardFormOne/WizardFormOne';
import WizardFormTwo from '../../components/WizardFormTwo/WizardFormTwo';
import WizardFormThree from '../../components/WizardFormThree/WizardFormThree';
import classes from './WizardForm.css';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className={classes.WizardBody}>
        {page === 1 && <WizardFormOne onSubmit={this.nextPage} id="formOne"/>}
        {page === 2 && <WizardFormTwo previousPage={this.previousPage} onSubmit={this.nextPage} id="formTwo"/>}
        {page === 3 && <WizardFormThree previousPage={this.previousPage} onSubmit={onSubmit} id="formThree"/>}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
