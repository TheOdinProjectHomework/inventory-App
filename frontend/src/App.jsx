import { Route, Routes } from 'react-router';
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className='flex h-screen overflow-hidden'>
    <Sidebar />
    <Routes>
      <Route path='/' element={<HomePage />}/>
    </Routes>
    </div>
  );
}

export default App
