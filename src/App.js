import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import DarkMode from "./components/DarkMode";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <DarkMode></DarkMode>
    </RecoilRoot>
  );
}

export default App;
