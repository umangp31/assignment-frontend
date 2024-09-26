import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/tailwind.css';
import './assets/styles/scss/global.scss';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Work from './pages/Work/Work';
import About from './pages/About/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/about' element={<About/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
