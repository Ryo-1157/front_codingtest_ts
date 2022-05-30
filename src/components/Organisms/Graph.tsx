import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { GraphProps } from '../../type';
import styles from '../../styles/Organisms/Graph.module.scss';
import '../../styles/Organisms/HighchartsStyleCange.css';
import React from 'react';

export const Graph: React.VFC<GraphProps> = React.memo(({ populationdata }) => {
	const series: Highcharts.SeriesOptionsType[] = [];
	const categories: string[] = [];

	for (const p of populationdata) {
		const data: number[] = [];

		for (const pd of p.data) {
			data.push(pd.value);
			categories.push(String(pd.year));
		}

		series.push({
			type: 'line',
			name: p.prefName,
			data: data,
		});
	}
	const options: Highcharts.Options = {
		chart: {
			height: 380,
		},
		title: {
			text: '総人口推移',
		},
		xAxis: {
			title: {
				text: '年度',
			},
			categories: categories,
		},
		yAxis: {
			title: {
				text: '人口数',
			},
		},
		series: series.length === 0 ? [{ type: 'line', name: '都道府県名', data: [] }] : series,
	};

	return (
		<figure className={styles.graph_wrap}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</figure>
	);
});
