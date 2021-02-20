import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

// import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';




class App extends Component {
  state = {
    galleryList: []
  }// end state

  // on load get gallery
  componentDidMount() {
    this.getGallery();
  } // end componentDidMount

  // function to get gallery
  getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      this.setState({
        galleryList: response.data
      })
    })
    .catch(err => {
      console.log('Unable to retrieve gallery', err);
    })
  }
  
  render() {
    console.log(this.State)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={this.state.galleryList}/>
      </div>
    ) // end return
  } // end render
}

export default App;
