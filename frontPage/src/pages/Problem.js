import React from 'react';
import { ProblemDescription } from '../components/ProblemDescription';
import { problems } from '../constants';
import { SolutionOnlyText } from '../components/SolutionOnlyText';
import { SolutionConsumeApi } from '../components/SolutionConsumeApi';
import { SolutionLogin } from '../components/SolutionLogin';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { BackButton } from '../styles/StyledComponets';

const getComponent = (type) => {
	let Component = null;

	switch (type) {
		case 1:
			Component = SolutionOnlyText;
			break;
		case 2:
			Component = SolutionConsumeApi;
			break;
		case 3:
			Component = SolutionLogin;
			break;
		default:
			Component = SolutionOnlyText;
	}

	return Component;
};

export const Problem = ({ match, history }) => {
	const { id } = match.params;
	const { title, subtitle, description, subdescription, type } = problems.filter((elem) => elem.id == id).shift();
	let Solution = getComponent(type);
	const data = { id, title, description, Solution, subtitle, subdescription };

	const goBack = (e) => {
		history.push('/');
	};

	return (
		<React.Fragment>
			<BackButton onClick={goBack}>
				<ChevronLeftIcon />
			</BackButton>
			<ProblemDescription {...data} />
		</React.Fragment>
	);
};
