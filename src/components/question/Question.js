import React from 'react';
import TextField from 'material-ui/TextField';

const Question = (props) =>  (
	<div className="Question">
		<TextField
	      hintText={props.text}
	      floatingLabelText={props.text}
	    />
	</div>
);

export default Question;