import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'

const App = () => {
  const [category,setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <Navbar setCategory={setCategory} setSearchTerm={setSearchTerm} />
      <News category={category} searchTerm={searchTerm} />
    </>
  )
}

export default App
