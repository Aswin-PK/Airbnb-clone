import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Categories from './Components/Categories/Categories'
import RowCards from './Components/RowCards/RowCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />
      <Categories />
      <RowCards imageUrl="https://a0.muscache.com/im/pictures/458e3fa3-3b67-4dc5-87b3-65178557429b.jpg?im_w=720"/>
    </div>
  )
}

export default App
