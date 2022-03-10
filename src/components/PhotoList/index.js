import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
        {
            name: 'Password Generator',
            category: 'solo projects',
            description: 'Generates a random password based off of user input'
        },
        {
            name: 'Budget Tracker',
            category: 'solo projects',
            description: 'A PWA that keeps track of your finances'
        },
        {
            name: 'Boot Camp Quiz',
            category: 'solo projects',
            description: 'An interactive quiz about the history of coding'
        },
        {
            name: 'Top 3 Taco Shops',
            category: 'group projects',
            description: 'An interact site that highlights the top 3 taco shops in Austin with menu highlights'
        },
        {
            name: 'RoughStock Rodeo',
            category: 'goup projects',
            description: 'Interactive site that allows users to sign up and login and out for Rough stock rodeo events'
        },
        {
            name: 'Cow money making',
            category: 'group projects',
            description: 'An interactive MERN SPA app'
        }
    ]);
    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (photo, i) => {
      setCurrentPhoto({ ...photo, index: i });
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <div>
        {isModalOpen && (
          <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
        )}
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
           
            <img
            
              src={require(`../../assets/portfolio/${category}/${i}.jpg`).default}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PhotoList;

