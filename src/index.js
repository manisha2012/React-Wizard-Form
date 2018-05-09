import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import consoleData from "./components/ConsoleData/ConsoleData";
import WizardForm from './containers/WizardForm/WizardForm';
import classes from './index.css';
import bgImg from './assets/img/bgi.jpg';

ReactDOM.render(
  <Provider store={store}>
    <div className={[classes.Background, ''].join(' ')} style={{backgroundImage: 'url('+bgImg+')'}}>
      <div className="container">
	       <div className="row">
		       <div className="col-sm-8 col-sm-offset-2">
             <div className={classes.WizardContainer}>
               <div className={[classes.Box, classes.WizardBox].join(' ')} >
                 <div className={classes.WizardHeader}>
		               <h3 className={classes.WizardTitle}>APPLICATION FORM</h3>
									 <h5>This information will let us know more about you.</h5>
		             </div>
                 <WizardForm onSubmit={consoleData} />
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
  </Provider>,
  document.getElementById("root")
);
