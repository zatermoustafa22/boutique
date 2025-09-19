import React, { useState, useMemo } from 'react';
import './Fairechoix.css';
import kashniImg from './assets/kashni.jpg';
import kashniImg2 from './assets/kashni2.jpg';
import burberryVideo from './assets/burberryy.mp4';

import MontoImg from './assets/monto.jpg';

import SacImg from './assets/sac.jpg';
import SacmenImg from './assets/sacmen.jpg';
import WalletwomenImg from './assets/walletwomen.jpg';
import WalletmenImg from './assets/walletmen.jpg';
import MontomenImg from './assets/coatmen.jpg';
import RosegoldwomenImg from './assets/rosegoldwomen.jpg';
import LeatherbraceletmenImg from './assets/leatherbraceletmen.jpg';
import BuckethatmenImg from './assets/buckethatmen.jpg';
import BraceletmenImg from './assets/braceletmen.jpg';
import BeltImg from './assets/belt.jpg';
import Belt2Img from './assets/belt2.jpg';
import BeltmenImg from './assets/beltmen.jpg';
import WatchmenImg from './assets/watchmen.jpg';
import BraceltwomenImg from './assets/braceletwomen.jpg';
import Braceltwomen2Img from './assets/braceletwomen2.jpg';

export default function Fairechoix({ category, onBack }) {
  const [type, setType] = useState(null);
  const [filters, setFilters] = useState({ couleur: null, prix: null});


  const handleTypeChange = (value) => {
    setType(prev => (prev === value ? null : value));
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: prev[filterName] === value ? null : value,
    }));
  };

const productTypes = category === 'femme'
  ? ['Écharpes', 'Sacs', 'Manteaux', 'Wallet', 'Ceintures', 'Bracelets','Watch']
  : ['Écharpes', 'Sacs', 'Manteaux', 'Wallet', 'Bracelets', 'Ceintures','Watch'];


  const allProducts = [
  { id: 1, name: 'Écharpe beige', type: 'Écharpes', couleur: 'beige', prix: 'plus50', gender: 'unisex', image: kashniImg2, price: '120€' },
  { id: 2, name: 'Manteau beige', type: 'Manteaux', couleur: 'beige', prix: 'plus50', gender: 'femme', image: MontoImg, price: '399€' },
  { id: 3, name: 'Écharpe bleu', type: 'Écharpes', couleur: 'bleu', prix: 'moins50', gender: 'unisex', image: kashniImg, price: '30€' },
  { id: 4, name: 'Sac beige', type: 'Sacs', couleur: 'beige', prix: 'moins50', gender: 'femme', image: SacImg, price: '30€' },
  { id: 5, name: 'Sac beige', type: 'Sacs', couleur: 'beige', prix: 'moins50', gender: 'homme', image: SacmenImg, price: '30€' },
  { id: 6, name: 'Wallet marron', type: 'Wallet', couleur: 'marron', prix: 'moins50', gender: 'homme', image: WalletmenImg, price: '30€' },
  { id: 7, name: 'Manteau beige', type: 'Manteaux', couleur: 'beige', prix: 'plus50', gender: 'homme', image: MontomenImg, price: '399€' },
  { id: 8, name: 'Wallet', type: 'Wallet', couleur: 'beige', prix: 'moins50', gender: 'femme', image: WalletwomenImg, price: '40€' },
  { id: 9, name: 'Rose Gold Watch', type: 'Watch', couleur: 'or rose', prix: 'moins50', gender: 'femme', image: RosegoldwomenImg, price: '45€' },
  { id: 10, name: 'Leather Bracelet', type: 'Bracelets', couleur: 'marron', prix: 'moins50', gender: 'homme', image: LeatherbraceletmenImg, price: '35€' },
  { id: 11, name: 'Bucket Hat', type: 'Chapeaux', couleur: 'beige', prix: 'moins50', gender: 'homme', image: BuckethatmenImg, price: '25€' },
  { id: 12, name: 'Bracelet Argent', type: 'Bracelets', couleur: 'argent', prix: 'moins50', gender: 'homme', image: BraceletmenImg, price: '30€' },
  { id: 13, name: 'Ceinture cuir', type: 'Ceintures', couleur: 'noir', prix: 'moins50', gender: 'femme', image: BeltImg, price: '50€' },
  { id: 14, name: 'Ceinture beige', type: 'Ceintures', couleur: 'beige', prix: 'moins50', gender: 'femme', image: Belt2Img, price: '50€' },
  { id: 15, name: 'Ceinture noire', type: 'Ceintures', couleur: 'noir', prix: 'moins50', gender: 'homme', image: BeltmenImg, price: '50€' },
  { id: 16, name: 'Rose Gold Watch', type: 'Watch', couleur: 'or rose', prix: 'moins50', gender: 'homme', image: WatchmenImg, price: '45€' },
  { id: 17, name: 'Bracelet or rose', type: 'Bracelets', couleur: 'or rose', prix: 'moins50', gender: 'femme', image: BraceltwomenImg, price: '30€' },
  { id: 18, name: 'Bracelet or', type: 'Bracelets', couleur: 'or', prix: 'moins50', gender: 'femme', image: Braceltwomen2Img, price: '30€' },
];


// eslint-disable-next-line react-hooks/exhaustive-deps
 const filteredProducts = useMemo(() => {
  return allProducts.filter(p => {
    if (category === 'homme' && p.gender === 'femme') return false;
    if (category === 'femme' && p.gender === 'homme') return false;
    
    if (type && p.type !== type) return false;
    if (filters.couleur && p.couleur !== filters.couleur) return false;
    if (filters.prix && p.prix !== filters.prix) return false;
    
    if (p.gender === 'unisex') return true;

    return true;
  });
}, [allProducts, type, filters, category]);


  return (
    <div className="choix-wrapper">
  <video autoPlay loop muted playsInline className="background-video">
    <source src={burberryVideo} type="video/mp4" />
  </video>
  <div className="video-overlay"></div> 
  <div className="choix-container">
    <button 
  className="back-button" 
  onClick={onBack}  
>
  ← Accueil
</button>
    <h2 className="choix-title">
    {category === 'femme' ? 'Pour FEMME ' : 'Pour HOMME '}
    </h2>

        {/* Type de produit */}
        <div className="filters-line">
          
          <h3>Type de produit :</h3>
          <div className="filter-buttons">
            {productTypes.map(item => (
              <button
                key={item}
                className={type === item ? 'active' : ''}
                onClick={() => handleTypeChange(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

    
        <div className="filter-buttons">

  <button className={filters.couleur === 'beige' ? 'active' : ''} onClick={() => handleFilterChange('couleur', 'beige')}>Beige</button>
  <button className={filters.couleur === 'noir' ? 'active' : ''} onClick={() => handleFilterChange('couleur', 'noir')}>Noir</button>
  <button className={filters.couleur === 'bleu' ? 'active' : ''} onClick={() => handleFilterChange('couleur', 'bleu')}>Bleu</button>
  <button className={filters.couleur === 'marron' ? 'active' : ''} onClick={() => handleFilterChange('couleur', 'marron')}>Marron</button>
  <button className={filters.couleur === 'or rose' ? 'active' : ''} onClick={() => handleFilterChange('couleur', 'or rose')}>Or rose</button>
  <button className={filters.couleur === 'argent' ? 'active' : ''} onClick={() => handleFilterChange('couleur', 'argent')}>Argent</button>
  <button className={filters.couleur === 'or' ? 'active' : ''} onClick={() => handleFilterChange('couleur', 'or')}>Or</button>
  {/* ---- Prix ---- */}
  <button className={filters.prix === 'moins50' ? 'active' : ''} onClick={() => handleFilterChange('prix', 'moins50')}>- de 50€</button>
  <button className={filters.prix === 'plus50' ? 'active' : ''} onClick={() => handleFilterChange('prix', 'plus50')}>+ de 50€</button>

  
</div>


      
        <div className="results">
          <h3>Résultats :</h3>
          {filteredProducts.length > 0 ? (
            <div className="cards-grid">
              {filteredProducts.map(p => (
                <div
  key={p.id}
  className="product-card"
  onClick={() => window.open(`/product/${p.id}`, "_blank")} 
>
  <img src={p.image} alt={p.name} className="product-img" />
  <h4 className="product-name">{p.name}</h4>
  <p className="product-price">{p.price}</p>
</div>

              ))}


            </div>

          ) : (
            <p>Aucun produit ne correspond aux filtres</p>
          )}
        </div>


      </div>
      

    </div>
  );
}
