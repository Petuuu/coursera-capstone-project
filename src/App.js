import 'antd/dist/reset.css';
import './App.css';
import Header from './shared/ui/Header/Header';
import Footer from './shared/ui/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useReducer } from 'react';

export function initializeTimes() {
	const today = new Date();
	return window.fetchAPI(today);
}

export function updateTimes(state, action) {
	if (action.type === "update") {
		const date = new Date(action.date);
		return window.fetchAPI(date);
	}
	return state;
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