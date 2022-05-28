type Prefecture = {
	prefCode: number;
	prefName: string;

	onChange: (name: string, prefName: number, check: boolean) => void;
};

import { CheckboxInput } from '../Atoms/CheckboxInput';
import { CheckboxLabel } from '../Atoms/CheckboxLabel';

export const CheckboxItem: React.VFC<Prefecture> = (props) => {
	const { prefCode, prefName, onChange } = props;
	return (
		<>
			<>
				<CheckboxLabel prefCode={prefCode} prefName={prefName}>
					<CheckboxInput prefCode={prefCode} prefName={prefName} onChange={onChange} />
				</CheckboxLabel>
			</>
		</>
	);
};
