import { useEffect, useState } from 'react';
import { getPopulation, getPrefectures } from '../../Middleware';
import { CheckboxList } from '../Organisms/CheckboxList';
import { Graph } from '../Organisms/Graph';

type Prefecture = {
	prefName: string;
	prefCode: number;
};

type PrefectureResponse = {
	result: Prefecture[];
	message: null;
};

export const PrefecturePage: React.VFC = () => {
	const [prefectures, setPrefectures] = useState<{
		message: null;
		result: {
			prefCode: number;
			prefName: string;
		}[];
	} | null>(null);
	const [prefPopulation, setPrefPopulation] = useState<{ prefName: string; data: { year: number; value: number }[] }[]>(
		[]
	);

	useEffect(() => {
		getPrefectures()
			.then((res) => {
				setPrefectures(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<main>
			{prefectures && <CheckboxList prefectures={prefectures.result} />}
			<Graph populationdata={prefPopulation} />
		</main>
	);
};
