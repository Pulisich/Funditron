import './App.css';
import Footer from './components/Footer/footer';
import LanguageSelector from './components/Languages/languages';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import HomeSpa from './components/Homes/homeSpa';
import Funditron from './components/Funditron/funditron';
import FaqSpa from './components/FAQ/faqSpa';
import HomeEng from './components/Homes/homeEng';
import FunditronEng from './components/Funditron/funditronEng';
import FaqEng from './components/FAQ/faqEng';
import { ContextProvider } from './context/appContext';
function App() {

  return (
    <div className="App">
      
      <ContextProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={ <LanguageSelector />}/>
          
          <Route path="/home-spa" element={<HomeSpa/>}/>
          <Route path="/home-eng" element={<HomeEng/>}/>

          <Route path="/funditron" element={<Funditron/>}/>
          <Route path="/funditron-en" element={<FunditronEng/>}/>
          
          <Route path="/faq-spa" element={<FaqSpa/>}/>
          <Route path="/faq-eng" element={<FaqEng/>}/>


        </Routes>
          <Footer />
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
