import React from 'react';
import { MainTitle } from '../../styles/StyledComponets';

export const ListOfPappers = ({ title, List, click }) => (
	<React.Fragment>
		<MainTitle color="textPrimary" variant="h5">
			{title}
		</MainTitle>
		<List click={click} />
	</React.Fragment>
);
