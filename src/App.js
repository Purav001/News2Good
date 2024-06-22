import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'

const App = () => {
  const [category, setCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Navbar setCategory={setCategory} setSearchTerm={setSearchTerm} />
      <News category={category} searchTerm={searchTerm} />
    </div>
  )
}

export default App
