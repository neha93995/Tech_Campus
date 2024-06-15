import './App.css';
import About from './Components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthContext';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import UserProfile from './Components/Profile/UserProfile';
import EditProfile from './Components/Profile/EditProfile';
import Blog from './Components/Pages/Blog';
import BlogPage from './Components/Pages/BlogPage';
import CreateBlog from './Components/Pages/CreateBlog';





function App() {
  return (
    <AuthProvider>

    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} /> 
          <Route path='/signup' element={<Signup/>} /> 
          <Route path='/profile' element={<UserProfile/>} /> 
          <Route path='/profile/edit-profile' element={<EditProfile/>} /> 
          <Route path='/blog-page/blogs' element={<Blog/>} />
          <Route path='/blog-page' element={<BlogPage/>} />
          <Route path='/blog-page/create-blog' element={<CreateBlog/>} />
          
        </Routes>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
