type Prefecture = {
	prefCode: number;
	prefName: string;
};

export const CheckboxInput: React.VFC<Prefecture> = (props) => {
	const { prefCode, prefName } = props;
	return <input type="checkbox" id={`prefCode-${prefCode}`} className="checkbox" name={prefName} />;
};
