import './App.css';
import About from './Components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthContext';
import Home from './Components/Home/Home';





function App() {
  return (
    <AuthProvider>

    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
