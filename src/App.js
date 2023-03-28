import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import Mainlayout from './components/Mainlayout';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/reset-password' element={<Resetpassword/>}/>
        <Route path='/forgot-password' element={<Forgotpassword/>}/>
        <Route path='/admin' element={<Mainlayout/>}>
          <Route index element = {<Dashboard/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
