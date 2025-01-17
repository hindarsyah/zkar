import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Profile from './pages/Profile'
import Layout from './components/Layout'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import History from './pages/History'
import Knowledge from './pages/Knowledge'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="history" element={<History />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
