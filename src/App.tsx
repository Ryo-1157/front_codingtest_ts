import { Header } from './components/Layouts/Header';
import { PrefecturePage } from './components/Pages/PrefecturePage';
import './styles/Global/reset.css';

function App() {
	return (
		<>
			<Header headerText="hoge" />
			<PrefecturePage />
		</>
	);
}

export default App;
