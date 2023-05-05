import { useState } from 'react';
import ImagesSide from './ImagesSide';
import LoginRight from './LoginRight';

function App() {
  return (
    <div className="w-full h-screen flex">
      <ImagesSide />
      <LoginRight />
  </div>
  )
}

export default App