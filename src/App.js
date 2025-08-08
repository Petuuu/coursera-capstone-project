import 'antd/dist/reset.css';
import './App.css';
import Header from './shared/ui/Header/Header';
import Footer from './shared/ui/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/reservation" element={<ReservationPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;