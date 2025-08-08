import 'antd/dist/reset.css';
import './App.css';
import Header from './shared/ui/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Footer from './shared/ui/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;