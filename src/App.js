import {Route, Routes} from "react-router-dom"
import { Box } from '@mui/material'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ExerciseDetail from "./components/ExerciseDetail"
import Footer from "./components/Footer"

import './App.css'


function App() {

  return (
    <Box width="400px" sx={{ inlineSize: { xl: '1488px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
