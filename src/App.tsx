import { Header } from './components/Organisms/Header';
import { PrefecturePage } from './components/Pages/PrefecturePage';
import './styles/Global/reset.css';
import './styles/Global/app.css';

function App() {
	return (
		<>
			<Header headerText="都道府県別の総人口推移" />
			<PrefecturePage />
		</>
	);
}

export default App;
