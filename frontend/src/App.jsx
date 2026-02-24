import './App.css'
import Sidebar from './components/sidebar/Sidebar';

function App() {

  return (
    <div className='flex h-screen overflow-hidden'>
    <Sidebar />
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">Inventory-App</a>
      </div>
    </div>
  );
}

export default App
