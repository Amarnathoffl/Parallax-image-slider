import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Second from './components/Second';
import Third from './components/Third';
import Fouth from './components/Fouth';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Fifth from './components/Fifth';
import Last from './components/Last';

function App() {

  return (
    <>
     <div className="fullbodycontent">
      <Header/>
      <Homepage/>
      <Second/>
      <Third/>
      <Fouth/>
      <Fifth/>
      <Faq/>
      <Last/>
      <Footer/>
     </div>
    </>
  )
}

export default App
