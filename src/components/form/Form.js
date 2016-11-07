import React from 'react';
import Section from '../section/Section';
import './Form.css';

const Form = (props) =>  (
	<div className="Form">
		{props.sections.map(section => {
			return <Section {...section} />
		})}
	</div>
);

export default Form;