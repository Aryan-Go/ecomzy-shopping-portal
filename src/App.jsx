import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx"
import AppRoutes from "./Routes/AppRoutes.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  )
}

export default App
