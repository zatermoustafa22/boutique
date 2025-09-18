import React from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css';
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
import kashniImg from './assets/kashni.jpg';
import kashniImg2 from './assets/kashni2.jpg';
import MontoImg from './assets/monto.jpg';
import backgroundImg from './assets/background.jpg';


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

export default function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const [showCardForm, setShowCardForm] = React.useState(false);

  const [formData, setFormData] = React.useState({
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    telephone: ''
  });

  const [cardData, setCardData] = React.useState({
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  if (!product) {
    return <h2>Produit introuvable</h2>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCardChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Après validation du formulaire d'achat, afficher le formulaire carte bancaire
    setShowCardForm(true);
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    alert("⚠️ Attention ! Ceci est un site fake. Vos informations ne seront pas utilisées.");
    setShowCardForm(false);
    setShowForm(false);
    // Réinitialisation des données pour éviter que les infos restent dans le state
    setFormData({ nom: '', prenom: '', email: '', adresse: '', telephone: '' });
    setCardData({ cardNumber: '', expiration: '', cvv: '' });
  };

  return (
    <div className="product-detail">
  <div className="product-content">
    {/* Left: Product Image */}
    {isModalOpen && (
  <div className="modal" onClick={() => setIsModalOpen(false)}>
    <img src={product.image} alt={product.name} className="modal-img" />
  </div>
)}

    <img
      src={product.image}
      alt={product.name}
      className="detail-img"
      onClick={() => setIsModalOpen(true)}
    />

    {/* Right: Product info and button */}
<div className="product-info">
  <h2>{product.name}</h2>
  <p><strong>Prix :</strong> {product.price}</p>
  <button className="buy-button" onClick={() => setShowForm(true)}>Acheter</button>
  
  {showForm && (
    <form onSubmit={handleSubmit} className="buy-form">
      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={formData.nom}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="adresse"
        placeholder="Adresse"
        value={formData.adresse}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telephone"
        placeholder="Téléphone"
        value={formData.telephone}
        onChange={handleChange}
        required
      />

      {/* Champ Taille uniquement pour Manteaux et Ceintures */}
      {(product.type === 'Manteaux' || product.type === 'Ceintures') && (
        <select
          name="taille"
          value={formData.taille || ''}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez la taille</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      )}

      <button type="submit">Valider l'achat</button>
    </form>
  )}

  {/* Formulaire carte bancaire */}
  {showCardForm && (
    <form onSubmit={handleCardSubmit} className="card-form">
      <input
        type="text"
        name="cardNumber"
        placeholder="Numéro de carte"
        value={cardData.cardNumber}
        onChange={handleCardChange}
        required
      />
      <input
        type="text"
        name="expiration"
        placeholder="MM/AA"
        value={cardData.expiration}
        onChange={handleCardChange}
        required
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={cardData.cvv}
        onChange={handleCardChange}
        required
      />
      <button type="submit">Finaliser l'achat</button>
    </form>
  )}
</div>
 </div>
  </div>
 
  );
}