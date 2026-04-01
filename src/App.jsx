import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from './pages/Home';
import VideoDetail from "./pages/VideoDetail";
import Search from './pages/Search';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;