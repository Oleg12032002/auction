import React, { useState, useEffect } from 'react';
import './Product.css';

const Product = ({ imageUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.keyCode === 27) {
        handleCloseModal();
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="product">
      <img src={imageUrl} alt="Product Image" onClick={handleImageClick} height='400px' />

      {modalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={imageUrl} alt="Product Image" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default Product;
