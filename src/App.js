import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";

import Home from "./page/Home";
import BookPage from "./page/Page1";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page-1" element={ <BookPage />} />
              <Route path="/page-2" element={<BookPage num={2} />} />
              <Route path="/page-3" element={<BookPage num={3} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
