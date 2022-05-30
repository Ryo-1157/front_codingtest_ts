import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { getPopulation } from '../Middleware';
import { Population, PopulationResponse } from '../type';

export const useSetPrefPopulation = () => {
	const [prefPopulation, setPrefPopulation] = useState<Population[]>([]);
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
	return { prefPopulation, onChangeChecked };
};
