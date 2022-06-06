import React from 'react';
import styles from '../../styles/Organisms/Header.module.scss';

export const Header: React.FC<{ headerText: string }> = React.memo((props) => {
	const { headerText } = props;
	return (
		<header className={styles.bl_header}>
			<h1>{headerText}</h1>
		</header>
	);
});
