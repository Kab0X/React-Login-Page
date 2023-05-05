import { useState } from 'react';
import ImagesSide from './ImagesSide';
import RegisterRight from './RegisterRight';

function App() {
  return (
    <div className="w-full h-screen flex">
      <ImagesSide />
      <RegisterRight />
  </div>
  )
}

export default App