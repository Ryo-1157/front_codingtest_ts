import { Prefecture } from '../../type';

export const CheckboxInput: React.VFC<Prefecture> = (props) => {
	const { prefCode, prefName, onChange } = props;
	return (
		<input
			type="checkbox"
			id={`prefCode-${prefCode}`}
			className="checkbox"
			name={prefName}
			onChange={(event) => {
				onChange(prefName, prefCode, event.target.checked);
			}}
		/>
	);
};
