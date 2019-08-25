import React from 'react';
import { MyPaper, Paragraph } from '../../styles/StyledComponets';

export const SolutionOnlyText = ({ textSolution }) => {
	return (
		<MyPaper>
			<Paragraph variant="body1">{textSolution}</Paragraph>
		</MyPaper>
	);
};
