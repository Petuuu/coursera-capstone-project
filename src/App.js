import 'antd/dist/reset.css';
import './App.css';
import Header from './shared/ui/Header/Header';
import Footer from './shared/ui/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [availableTimes, setAvailableTimes] = useState([
		{value: '17:00', label: '17:00'},
        {value: '18:00', label: '18:00'},
        {value: '19:00', label: '19:00'},
        {value: '20:00', label: '20:00'},
        {value: '21:00', label: '21:00'},
        {value: '22:00', label: '22:00'},
    ]);

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/reservation" element={<ReservationPage availableTimes={availableTimes} />} />
        		<Route path="/confirmation" element={<ConfirmationPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;