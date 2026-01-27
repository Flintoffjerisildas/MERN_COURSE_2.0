import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './layout/Landing'
import Register from './auth/Register';
import TaskLayout from '../taskUi/TaskLayout';

import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/task" element={<TaskLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App