import React from "react";
import "../Styles/Reservation.css"; 
import { Link } from "react-router-dom";

const Reservation= () => {
  return (
    <div className="luxury-container">
      <div className="luxury-image">
        <img
          src="https://via.placeholder.com/600x400" // Remplacez par votre URL d'image
          alt="Chambre de luxe"
        />
      </div>
      <div className="luxury-content">
        <div className="luxury-header">
          <span>VOTRE</span>
          <ul>
            <li>SÉJOUR</li>
            <li>TABLE</li>
            <li>SOIN</li>
            <li>ÉVÈNEMENT</li>
          </ul>
        </div>
        <div className="luxury-footer">
          <p>OFFRES SPÉCIALES</p>
          <p>BOUTIQUES</p>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
