import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useSetPrefecture } from '../../hooks/useSetPregecture';
import { getPopulation } from '../../Middleware';
import { Population, PopulationResponse } from '../../type';
import { CheckboxList } from '../Organisms/CheckboxList';
import { Graph } from '../Organisms/Graph';
import styles from '../../styles/Pages/PrefecturePage.module.scss';

export const PrefecturePage: React.VFC = () => {
	const [prefPopulation, setPrefPopulation] = useState<Population[]>([]);

	const { prefectures } = useSetPrefecture();

	const onChangeChecked = (prefName: string, prefCode: number, check: boolean) => {
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
				// eslint-disable-next-line
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
		<main className={styles.main_bg}>
			<Graph populationdata={prefPopulation} />
			{prefectures && <CheckboxList prefectures={prefectures.result} onChange={onChangeChecked} />}
		</main>
	);
};
