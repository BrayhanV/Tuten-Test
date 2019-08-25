import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Title, Paragraph, Subtitle, NoFlexExpansion } from '../../styles/StyledComponets';
import { solutions } from '../../constants';

export const ProblemDescription = ({ id, title, subtitle, description, subdescription, Solution }) => {
	const { textSolution, url } = solutions.filter((elem) => elem.problemId == id).shift();
	const data = { textSolution, url };

	return (
		<React.Fragment>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Title variant="h5" gutterBottom>
						{title}
					</Title>
				</ExpansionPanelSummary>
				<NoFlexExpansion>
					<Paragraph variant="body1" gutterBottom>
						{description}
					</Paragraph>
					{subtitle &&
						subtitle.map((elem, index) => (
							<React.Fragment key={index}>
								<Subtitle variant="h6" gutterBottom>
									{elem}
								</Subtitle>
								<Paragraph variant="body1" gutterBottom>
									{subdescription[index] ? subdescription[index] : ''}
								</Paragraph>
							</React.Fragment>
						))}
				</NoFlexExpansion>
			</ExpansionPanel>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel2a-header"
				>
					<Title variant="h5" gutterBottom>
						Solución:
					</Title>
				</ExpansionPanelSummary>
				<NoFlexExpansion>
					<Solution {...data} />
				</NoFlexExpansion>
			</ExpansionPanel>
		</React.Fragment>
	);
};
