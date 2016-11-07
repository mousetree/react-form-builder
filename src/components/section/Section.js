import React from 'react';
import Question from '../question/Question';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const Section = (props) =>  (
	<Card initiallyExpanded={true}>
	<CardHeader
      title={props.title}
      subtitle={props.description}
      actAsExpander={true}
      showExpandableButton={true}
    />
		<CardText expandable={true}>
			{props.questions.map(question => {
				return <Question {...question} />
			})}
		</CardText>
	</Card>
);

export default Section;