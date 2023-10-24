import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";

import Home from "./page/Home";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import Page3 from "./page/Page3";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page-1" element={<Page1 />} />
              <Route path="/page-2" element={<Page2 />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
