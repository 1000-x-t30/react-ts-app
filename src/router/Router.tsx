import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DarkModePage } from '../pages/darkMode'

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<DarkModePage />} />
    </Routes>
  </BrowserRouter>
)