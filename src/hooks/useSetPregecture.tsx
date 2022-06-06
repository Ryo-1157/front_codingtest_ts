import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { getPrefectures } from '../Middleware';
import { PrefectureResponse, Prefecture } from '../type';

export const useSetPrefecture = () => {
	const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

	useEffect(() => {
		getPrefectures()
			.then((res: AxiosResponse<PrefectureResponse>) => {
				setPrefectures(res.data.result);
			})
			.catch((err: AxiosError<{ error: string }>) => {
				console.error(err);
			});
	}, []);

	return { prefectures };
};
