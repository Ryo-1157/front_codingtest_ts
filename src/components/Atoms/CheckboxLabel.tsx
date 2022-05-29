import { ReactNode } from 'react';
import styles from '../../styles/Atoms/test.module.scss';

type Prefecture = {
	prefCode: number;
	prefName: string;
	children: ReactNode;
};

export const CheckboxLabel: React.VFC<Prefecture> = (props) => {
	const { prefCode, prefName, children } = props;
	return (
		<label htmlFor={`prefCode-${prefCode}`} className={styles.label_checkbox}>
			{children}
			{prefName}
		</label>
	);
};
