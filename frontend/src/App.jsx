import { Route, Routes } from 'react-router';
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import ItemsPage from './pages/ItemsPage';

function App() {

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="categories/:category" element={<ItemsPage />} />
      </Routes>
    </div>
  );
}

export default App
