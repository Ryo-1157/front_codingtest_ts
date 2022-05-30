import { PrefectureNameList } from '../../type';
import { CheckboxItem } from '../Molecules/CheckboxItem';
import styles from '../../styles/Organisms/CheckboxList.module.scss';

export const CheckboxList: React.VFC<PrefectureNameList> = (props) => {
	const { prefectures, onChange } = props;
	return (
		<>
			<ul className={styles.bl_checkboxList}>
				{prefectures.map((prefecture) => (
					<li key={prefecture.prefCode} className={styles.bl_checkboxList_li}>
						<CheckboxItem prefCode={prefecture.prefCode} prefName={prefecture.prefName} onChange={onChange} />
					</li>
				))}
			</ul>
		</>
	);
};
