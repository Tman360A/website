import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import homePage from './pages/homePage';
import loginPage from './pages/loginPage';
import signUpPage from './pages/signUpPage';
import "./pages/pagesCss/app.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={homePage} />
        <Route path="/login" Component={loginPage} />
        <Route path='/sign-up' Component={signUpPage} />
      </Routes>
    </Router>
  );
}

export default App
