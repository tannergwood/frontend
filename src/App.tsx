import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Podcast from './podcastPage';
import MovieList from './Movies';
import Header from './headerPart';
import HomePage from './homePage';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="" element="<HomePage />" />
          <Route path="podcast" element={<Podcast />} />
          <Route path="movies" element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
