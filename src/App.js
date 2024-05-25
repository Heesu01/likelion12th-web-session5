import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
