import { CheckboxItem } from '../Molecules/CheckboxItem';
type PrefectureNameList = {
	prefectures:
		| {
				prefName: string;
				prefCode: number;
		  }[];
};

export const CheckboxList: React.VFC<PrefectureNameList> = (props) => {
	const { prefectures } = props;
	return (
		<>
			{prefectures.map((prefecture) => (
				<li key={prefecture.prefCode}>
					<CheckboxItem prefCode={prefecture.prefCode} prefName={prefecture.prefName} />
				</li>
			))}
		</>
	);
};
