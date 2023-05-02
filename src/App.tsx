import { useState } from 'react';
import './App.css';
import ImagesSide from './pages/ImagesSide';
import LoginRight from './pages/LoginRight';

function App() {
  return (
    <div className="w-full h-screen flex">
      <ImagesSide />
      <LoginRight />
  </div>
  )
}

export default App