import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { getPrefectures } from '../Middleware';
import { PrefectureResponse, PrefecturesState } from '../type';

export const useSetPrefecture = () => {
	const [prefectures, setPrefectures] = useState<PrefecturesState | null>(null);

	useEffect(() => {
		getPrefectures()
			.then((res: AxiosResponse<PrefectureResponse>) => {
				setPrefectures(res.data);
			})
			.catch((err: AxiosError<{ error: string }>) => {
				console.log(err);
			});
	}, []);

	return { prefectures };
};
