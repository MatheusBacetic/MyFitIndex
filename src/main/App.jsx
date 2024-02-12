
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

function App() {

  return (
    <>
        <div className="app">
            <Nav />
            <Footer />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
        </div>
    </>
  );
}

export default App;
