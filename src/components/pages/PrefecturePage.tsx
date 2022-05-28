import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { getPopulation, getPrefectures } from '../../Middleware';
import { CheckboxList } from '../Organisms/CheckboxList';
import { Graph } from '../Organisms/Graph';

type PrefectureResponse = {
	result: [];
	message: null;
};

type PopulationResponse = {
	result: {
		boundaryYear: 2015;
		data: {
			label: string;
			data: {
				year: number;
				value: number;
			}[];
		}[];
	};
};

type Population = { prefName: string; data: { year: number; value: number }[] };

export const PrefecturePage: React.VFC = () => {
	const [prefectures, setPrefectures] = useState<{
		result: {
			prefCode: number;
			prefName: string;
		}[];
	} | null>(null);
	const [prefPopulation, setPrefPopulation] = useState<Population[]>([]);

	useEffect(() => {
		getPrefectures()
			.then((res: AxiosResponse<PrefectureResponse>) => {
				setPrefectures(res.data);
			})
			.catch((err: AxiosError<{ error: string }>) => {
				console.log(err);
			});
	}, []);

	const handleClickCheck = (prefName: string, prefCode: number, check: boolean) => {
		const populationList = prefPopulation.slice();
		if (check) {
			if (populationList.findIndex((value) => value.prefName === prefName) !== -1) return;

			getPopulation(prefCode)
				.then((res: AxiosResponse<PopulationResponse>) => {
					populationList.push({
						prefName: prefName,
						data: res.data.result.data[0].data,
					});

					setPrefPopulation(populationList);
				})
				.catch((error: AxiosError<{ error: string }>) => {
					return;
				});
		} else {
			const deleteIndex = populationList.findIndex((value) => value.prefName === prefName);
			if (deleteIndex === -1) return;
			populationList.splice(deleteIndex, 1);
			setPrefPopulation(populationList);
		}
	};

	return (
		<main>
			<Graph populationdata={prefPopulation} />
			{prefectures && <CheckboxList prefectures={prefectures.result} onChange={handleClickCheck} />}
		</main>
	);
};
