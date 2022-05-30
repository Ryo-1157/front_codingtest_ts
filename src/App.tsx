import { Header } from './components/Layouts/Header';
import { PrefecturePage } from './components/Pages/PrefecturePage';
import './styles/Global/reset.css';

function App() {
	return (
		<>
			<Header headerText="都道府県別の総人口推移" />
			<PrefecturePage />
		</>
	);
}

export default App;
