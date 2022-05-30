import React from 'react';
import { Prefecture } from '../../type';
import { CheckboxInput } from '../Atoms/CheckboxInput';
import { CheckboxLabel } from '../Atoms/CheckboxLabel';

export const CheckboxItem: React.VFC<Prefecture> = React.memo((props) => {
	const { prefCode, prefName, onChange } = props;
	return (
		<>
			<CheckboxLabel prefCode={prefCode} prefName={prefName}>
				<CheckboxInput prefCode={prefCode} prefName={prefName} onChange={onChange} />
			</CheckboxLabel>
		</>
	);
});
