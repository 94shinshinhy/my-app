import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login/:id" exact={true} element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
