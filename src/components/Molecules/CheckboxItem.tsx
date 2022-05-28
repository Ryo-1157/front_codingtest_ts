type Prefecture = {
	prefCode: number;
	prefName: string;
};

import { CheckboxInput } from '../Atoms/CheckboxInput';
import { CheckboxLabel } from '../Atoms/CheckboxLabel';

export const CheckboxItem: React.VFC<Prefecture> = (props) => {
	const { prefCode, prefName } = props;
	return (
		<>
			<>
				<CheckboxLabel prefCode={prefCode} prefName={prefName}>
					<CheckboxInput prefCode={prefCode} prefName={prefName} />
				</CheckboxLabel>
			</>
		</>
	);
};
