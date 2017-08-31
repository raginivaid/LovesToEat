import React from 'react';

const FooterButton = (props) => {
  const { submitLabel, otherLabel, goToLink, history } = props;
  return (
 
	    <div>
	      <button type="submit" className="btn btn-primary">{submitLabel}</button>
	      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	      <button type="button" className="btn btn-info" onClick={() => {
	        history.push(goToLink);
	      }}>{otherLabel}</button>
	    </div>
	
  );
};

export default FooterButton;