import 'antd/dist/reset.css';
import './App.css';
import Header from './shared/ui/Header/Header';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import Footer from './shared/ui/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <ConfirmationPage />
      <Footer />
    </>
  );
}

export default App;