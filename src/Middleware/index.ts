import axios from 'axios';

const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1';

export const getPrefectures = () => {
	return axios.get(`${BASE_URL}/prefectures`, {
		headers: { 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` },
	});
};

export const getPopulation = (prefCode: number) => {
	return axios.get(`${BASE_URL}/population/composition/perYear?prefCode=${prefCode}`, {
		headers: { 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` },
	});
};
