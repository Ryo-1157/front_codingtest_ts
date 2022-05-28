import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { getPrefectures } from '../../Middleware';
import { CheckboxList } from '../Organisms/CheckboxList';
import { Graph } from '../Organisms/Graph';

type Prefecture = {
	prefName: string;
	prefCode: number;
};

type PrefectureResponse = {
	result: [];
	message: null;
};

export const PrefecturePage: React.VFC = () => {
	const [prefectures, setPrefectures] = useState<{
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
			.then((res: AxiosResponse<PrefectureResponse>) => {
				setPrefectures(res.data);
			})
			.catch((err: AxiosError<{ error: string }>) => {
				console.log(err);
			});
	}, []);

	const onChangeTest = (): void => {
		alert('clicked!');
	};

	return (
		<main>
			{prefectures && <CheckboxList prefectures={prefectures.result} onChange={onChangeTest} />}
			<Graph populationdata={prefPopulation} />
		</main>
	);
};
