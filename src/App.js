import './App.css';
import Header from './Components/Header/Header.jsx';
import Subscriptions from './Components/Subscriptions/Subscriptions.jsx';
import Icons from './Components/Icons/Icons.jsx';
import Footer from './Components/Footer/Footer';
import Map from './Components/Map/Map';
import SimpleSlider from './Components/Slider/SimpleSlider.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AuthPage from './Pages/AuthPage';
import DownloadPage from './Pages/DownloadPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={[<Header />,<SimpleSlider />,<Subscriptions />,<Icons />,<Map />,<Footer />]}/>
          <Route path='/DownloadPage' element={<DownloadPage/>}/>
          <Route path='/AuthPage' element={<AuthPage/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;