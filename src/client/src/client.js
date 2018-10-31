import React from 'react';
import { hydrate } from 'react-dom';
import $ from 'jquery';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

import './lib/gallery_styles.css';
import './lib/modal_styles.css';
import './lib/rating_styles.css';

import rootReducer from './reducers/rootReducer';
import App from './components/App';
import { floatButtonWhenEntering, highlightImageOnHover } from "./helpers/initialize";


  
  const initialState = window.__initialState__;
  delete window.__initialState__;

  const store = createStore(rootReducer, initialState);

  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  var rooms = [];
  console.log(store.getState())
  
  store.getState().room.related.forEach((id, idx, related) => {
    axios.get(`http://localhost:4000/room/${id}`).then(({ data: room }) => {
      rooms.push(room);
      if (rooms.length === related.length)
        store.dispatch({
          type: 'UPDATE_RELATED_LISTINGS',
          payload: rooms
        });
    });
  });

  $(document).ready(function() {
    const $galleryImages = $('.gallery img');
    const $fourthImage = $('.img4');
    const $viewPhoto = $('.button-bottom');

    highlightImageOnHover($galleryImages)
    floatButtonWhenEntering($fourthImage);
    floatButtonWhenEntering($viewPhoto);
  })
