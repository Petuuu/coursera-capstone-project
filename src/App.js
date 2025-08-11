import 'antd/dist/reset.css';
import './App.css';
import Header from './shared/ui/Header/Header';
import Footer from './shared/ui/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useReducer } from 'react';

export function updateTimes(state, action) {
	let newState = state;

	if (action.type === "update") {
		newState = state.filter(time => time.value !== action.payload);
	}

	window.localStorage.setItem("availableTimes", JSON.stringify(newState));
	return newState;
}


export function initializeTimes() {
	const stored = window.localStorage.getItem("availableTimes");

	if (stored) {
		return JSON.parse(stored);
	}
	return [
		{value: '17:00', label: '17:00'},
		{value: '18:00', label: '18:00'},
		{value: '19:00', label: '19:00'},
		{value: '20:00', label: '20:00'},
		{value: '21:00', label: '21:00'},
		{value: '22:00', label: '22:00'},
	];
}

function App() {
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/reservation" element={<ReservationPage availableTimes={availableTimes} dispatch={dispatch} />} />
        		<Route path="/confirmation" element={<ConfirmationPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;