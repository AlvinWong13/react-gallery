import React from 'react';
import './App.css';

import{ useState } from 'react';
import axios from 'axios';

let [galleryList, setGalleryList] = userState([]);

const getGallery = () => {
  axios.get('/gallery')
  .then(response => {
    setGalleryList(response.data);
  })
  .catch(err => {
    console.log('Unable to retrieve gallery', err);
    res.sendStatus(500)
  })
}

const increaseLikes = (event) => {
  const galleryId = event.target.dataset.id;
  const galleryLike = event.target.dataset.likes;
  axios({
    url: `/gallery/${galleryId}`,
    method: 'PUT',
    data: {
      galleryLike
    }
  })
  .then(response => {
    console.log('Increased likes', response);
    getGallery();
  })
  .catch(err => {
    console.log('Unable to like photo', err);
  })
}

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
