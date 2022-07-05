import React from 'react';
import { BrowserRouter as
  Router,
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
