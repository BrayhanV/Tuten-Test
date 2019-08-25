import React from 'react';
import { Typography } from '@material-ui/core';
import { TechnologyList } from '../components/TechnologyList';
import { ExerciseList } from '../components/ExerciseList';
import { ListOfPappers } from '../components/ListOfPappers';
import { Paragraph } from '../styles/StyledComponets';

export const Home = ({ history }) => {
	const goTo = (location) => history.push(location);

	return (
		<React.Fragment>
			<Typography color="textPrimary" variant="h4" gutterBottom>
				¡Bienvenido!
			</Typography>
			<Paragraph color="textPrimary" variant="body1" gutterBottom>
				La presente app fue desarrollada con el fin de cumplir los requerimientos para una prueba de admisión,
				dicha prueba consta de 3 problemas los cuales serán mostrados a continuación junto con su solución.
			</Paragraph>
			<ListOfPappers title="Ejercicios:" List={ExerciseList} click={goTo} />
			<ListOfPappers title="Técnologias usadas:" List={TechnologyList} />
		</React.Fragment>
	);
};
