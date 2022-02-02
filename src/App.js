import './App.css';
import Footer from './components/Footer/footer';
import LanguageSelector from './components/Languages/languages';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import HomeSpa from './components/Homes/homeSpa';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <LanguageSelector />

        <Routes>

          <Route path="/home-spa" element={<HomeSpa/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
