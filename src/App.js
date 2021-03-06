import GlobalStyle from "./styles/globalStyles";
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Copyright, Navbar } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
      <Copyright />
    </Router>
  );
}

export default App;
