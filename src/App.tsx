import { Routes, Route, NavLink } from "react-router-dom"
import './App.scss';
import Books from "./components/books/Books";
import Characters from "./components/characters/Characters";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h3>Ice and Fire</h3>
        <div className="app__right">
          <ul>
            <li>
              <NavLink to="/" className="app__link">Book</NavLink>
            </li>
            <li>
              <NavLink to="/characters" className="app__link">Characters</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <div className="app__routes">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
