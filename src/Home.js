import React, { useEffect, useState } from 'react';
import './Home.css';
import Fairechoix from './Fairechoix';
import burberryVideo from './assets/burberryy.mp4';
export default function Home() {

  useEffect(() => {
    document.title = "Boutique d'accessoires";
  }, []);

 
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  const categories = [
    { id: 'femme', label: 'FEMME'},
    { id: 'homme', label: 'HOMME' },
  ];

  return (
    <main className="home">
      <header className="hero">
        <h1 className="home-title">Creativity Opens Spaces</h1>
        <p className="home-subtitle">by Thomas Burberry.</p>
      </header>

      {!selectedCategory ? (
        
        <section className="categories-section" aria-label="Catégories">
          <div className="categories-grid">
            <video autoPlay loop muted playsInline className="background-video">
                    <source src={burberryVideo} type="video/mp4" />
                  </video>
            {categories.map(cat => (
              <button
                key={cat.id}
                className="category-card"
                type="button"
                aria-label={cat.label}
                onClick={() => setSelectedCategory(cat.id)} 
              >
                <span className="category-emoji" aria-hidden>{cat.emoji}</span>
                <span className="category-label">{cat.label}</span>
              </button>
            ))}
          </div>
        </section>
      ) : (
        // 👉 si une catégorie est choisie → afficher FaireChoix
        <section className="choix-section">
          
         
          <Fairechoix category={selectedCategory} 
         onBack={() => setSelectedCategory(null)} 
         />

         
         
        </section>
      )}
    </main>
  );
}
