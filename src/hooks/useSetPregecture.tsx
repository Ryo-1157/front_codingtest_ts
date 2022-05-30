import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { getPrefectures } from '../Middleware';
import { PrefectureResponse } from '../type';

export const useSetPrefecture = () => {
	const [prefectures, setPrefectures] = useState<{ prefName: string; prefCode: number }[]>([]);

	useEffect(() => {
		getPrefectures()
			.then((res: AxiosResponse<PrefectureResponse>) => {
				setPrefectures(res.data.result);
			})
			.catch((err: AxiosError<{ error: string }>) => {
				console.log(err);
			});
	}, []);

	return { prefectures };
};
