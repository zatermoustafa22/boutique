
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/playfair-display"; // Defaults to weight 400
import "@fontsource/playfair-display/600.css"; // Semi-bold for titles
import Fairechoix from "./Fairechoix";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    
    
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Pages de choix */}
        <Route path="/femme" element={<Fairechoix category="femme" />} />
        <Route path="/homme" element={<Fairechoix category="homme" />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
