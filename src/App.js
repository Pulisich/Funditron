import './App.css';
import Footer from './components/Footer/footer';
import LanguageSelector from './components/Languages/languages';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import HomeSpa from './components/Homes/homeSpa';
import Funditron from './components/Funditron/funditron';
function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LanguageSelector />}/>
          <Route path="/home-spa" element={<HomeSpa/>}/>
          <Route path="/funditron" element={<Funditron/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
