import './App.css';
import About from './Components/About/About';
import HomeLayout from './Components/LayOuts/HomeLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<HomeLayout>Home</HomeLayout>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
