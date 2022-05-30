import styles from '../../styles/Layouts/Header.module.scss';

export const Header: React.VFC<{ headerText: string }> = (props) => {
	const { headerText } = props;
	return (
		<header className={styles.bl_header}>
			<h1>{headerText}</h1>
		</header>
	);
};
