import Create from './Components/Create';
import Header from './Components/Header';
import Update from './Components/Update';
import Navbar from './Components/Navbar';
import About from './Components/About';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "grey";
  return (
    <>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route exact path='/' element={<Navbar />} />

          <Route exact path='/create' element={<Create />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/update' element={<Update />} />
        </Routes>






      </BrowserRouter>

    </>
  );
}

export default App;
