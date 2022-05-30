import { useSetPrefecture } from '../../hooks/useSetPregecture';
import { CheckboxList } from '../Organisms/CheckboxList';
import { Graph } from '../Organisms/Graph';
import styles from '../../styles/Pages/PrefecturePage.module.scss';
import { useSetPrefPopulation } from '../../hooks/useSetPrefPopulation';
import React from 'react';

export const PrefecturePage: React.VFC = React.memo(() => {
	const { prefectures } = useSetPrefecture();
	const { prefPopulation, onChangeChecked } = useSetPrefPopulation();

	return (
		<main className={styles.main_bg}>
			<Graph populationdata={prefPopulation} />
			{prefectures && <CheckboxList prefectures={prefectures} onChange={onChangeChecked} />}
		</main>
	);
});
