import { ReactNode } from 'react';

type Prefecture = {
	prefCode: number;
	prefName: string;
	children: ReactNode;
};

export const CheckboxLabel: React.VFC<Prefecture> = (props) => {
	const { prefCode, prefName, children } = props;
	return (
		<label htmlFor={`prefCode-${prefCode}`}>
			{children}
			{prefName}
		</label>
	);
};
