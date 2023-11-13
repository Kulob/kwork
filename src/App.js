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
import LikesPage from './pages/likes';
import ForumPage from './pages/forum';
import ProductPage from './pages/product';
import ViewPage from './pages/view';
import SalePage from './pages/sale';
import QuestionPage from './pages/question';

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
        <Route path='/forum' element={<ForumPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/view' element={<ViewPage/>}/>
        <Route path='/likes' element={<LikesPage/>}/>
        <Route path='/sale' element={<SalePage/>}/>
        <Route path='/question' element={<QuestionPage/>}/>
      </Route>
      </Routes>
      
    </div>
  );
}

export default App;
