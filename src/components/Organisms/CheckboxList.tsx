import { PrefectureNameList } from '../../type';
import { CheckboxItem } from '../Molecules/CheckboxItem';

export const CheckboxList: React.VFC<PrefectureNameList> = (props) => {
	const { prefectures, onChange } = props;
	return (
		<>
			{prefectures.map((prefecture) => (
				<li key={prefecture.prefCode}>
					<CheckboxItem prefCode={prefecture.prefCode} prefName={prefecture.prefName} onChange={onChange} />
				</li>
			))}
		</>
	);
};
