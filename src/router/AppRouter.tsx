import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, PokemonPage } from "../components/pages";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </Router>
  );
};
