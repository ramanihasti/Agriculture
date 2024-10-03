import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Gellery from './pages/Gellery'
import Contact from './pages/Contact'
import Layout from './layout/Layout'

function App() {
  return (
    <>
       {/* <Home /> */}

       <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/service" element={<Service />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/gellery" element={<Gellery />} />
               <Route path="/contact" element={<Contact />} />
            </Route>
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App