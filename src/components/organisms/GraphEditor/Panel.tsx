import React from 'react';

import { DestinationPinRow, SourcePinRow } from 'components/atoms/PinRow';


interface Props {
	pinNames: string[];
	type: 'input' | 'output';
}


const Panel = ({ pinNames, type }: Props ) => {
	const PinRow = ( type === 'output') ? DestinationPinRow : SourcePinRow;
	return (
		<div className={ `graphEditor-graph-panel graphEditor-graph-${ type }Panel` }>
			{ pinNames.map(( name ) => (
				<PinRow name={ name } key={ name } />
			))}
		</div>
	);
};


export { Panel };
export default Panel;
