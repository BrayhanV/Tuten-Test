import React from 'react';
import { MyPaperDark, Paragraph } from '../../styles/StyledComponets';

export const SolutionOnlyText = ({ textSolution }) => {
	return (
		<MyPaperDark>
			<Paragraph variant="body1">{textSolution}</Paragraph>
		</MyPaperDark>
	);
};
