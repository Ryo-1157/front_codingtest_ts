import { ReactNode } from 'react';

export const Header: React.VFC<{ headerText: string }> = (props) => {
	const { headerText } = props;
	return (
		<header>
			<h1>{headerText}</h1>
		</header>
	);
};
