import { CheckboxItem } from '../Molecules/CheckboxItem';
type PrefectureNameList = {
	prefectures:
		| {
				prefName: string;
				prefCode: number;
		  }[];
	onChange: (name: string, prefName: number, check: boolean) => void;
};

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
