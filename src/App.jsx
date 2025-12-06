import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceArea from './pages/ServiceArea'
import Contact from './pages/Contact'
import SupabaseStatus from './pages/SupabaseStatus'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-area" element={<ServiceArea />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/supabase-status" element={<SupabaseStatus />} />
      </Routes>
    </Layout>
  )
}

export default App
