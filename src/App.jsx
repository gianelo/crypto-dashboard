import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { MainLayout } from './components/MainLayout.jsx'

import './App.css'

export function App () {
  return (
    <main>
      <Header />
      <MainLayout />
      <Footer />
    </main>
  )
}
