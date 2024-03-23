import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Slider from './Slider.jsx'
import Contact from './Contact.jsx'
import Footer from './footer.jsx'
import MenuResponsive from './MenuResponsive.jsx'

import './index.css'
import '@fontsource-variable/onest';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Slider />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
