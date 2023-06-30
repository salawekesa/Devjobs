
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import JobsList from './components/Jobs/JobsList';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';  

function App() {

  return (
    <div>
      <Header />
      <JobsList/>
      <h2><Link to={"/About"}>about</Link></h2>
      <Routes>
        <Route path='/About' element='{About/>}'></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
