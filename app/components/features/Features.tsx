import React from "react";

type FeaturesProps = {
  image: string;
  title: string;
  texte: string;
};

export const Features: React.FC<FeaturesProps> = ({ image, title, texte }) => {
  return (
    <div className="feature-item">
      <img src={image} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{texte}</p>
    </div>
  );
};
