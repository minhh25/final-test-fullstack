import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Teacher from './pages/Teacher.jsx'
import TeacherPosition from './pages/TeacherPosition.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Teacher />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/teacher-position" element={<TeacherPosition />} />
    </Routes>
  )
}

export default App
