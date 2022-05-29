export type Prefecture = {
	prefCode: number;
	prefName: string;

	onChange: (name: string, prefName: number, check: boolean) => void;
};

export type PrefectureNameList = {
	prefectures:
		| {
				prefName: string;
				prefCode: number;
		  }[];
	onChange: (name: string, prefName: number, check: boolean) => void;
};

export type PrefecturesState = {
	result: Prefecture[];
};

export type PrefectureResponse = {
	result: [];
	message: null;
};

export type PopulationResponse = {
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

export type Population = { prefName: string; data: { year: number; value: number }[] };

export type GraphProps = {
	populationdata: {
		prefName: string;
		data: { year: number; value: number }[];
	}[];
};
