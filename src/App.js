import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import LanguageSelector from './components/Languages/languages';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <LanguageSelector/>
      <Footer/>
    </div>
  );
}

export default App;
