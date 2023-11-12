import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import './index.scss'
import CatalogPage from './pages/catalog';
import TopUsers from './pages/TopUsers';
import ReviewsPage from './pages/reviews';
import LayoutPage from './pages/layout';
import WarrantyPage from './pages/warranty';
import RandomItem from './pages/randomItem';

function App() {
  return (
    <div className="app">
      <Routes>
      <Route path='/' element={<LayoutPage/>}>

        <Route path='' element={<HomePage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/topusers' element={<TopUsers/>}/>
        <Route path='/reviews' element={<ReviewsPage/>}/>
        <Route path='/warranty' element={<WarrantyPage/>}/>
        <Route path='/random' element={<RandomItem/>}/>
      </Route>
      </Routes>
      
    </div>
  );
}

export default App;
