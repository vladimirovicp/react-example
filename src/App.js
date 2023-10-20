import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";

import Home from "./page/Home";
import Page from "./page/BookPage";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/page/:pageId" element={<Page />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
