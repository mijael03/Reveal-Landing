import NavBar from './components/NavBar'
import Overview from './components/Overview'
import Process from './components/Process'
import ProductShowcase from './components/ProductShowcase'
import Contact from './components/Contact'
import Partnership from './components/Partnership'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import DemoModal from './components/DemoModal'
import { ModalProvider, useModal } from './contexts/ModalContext'

function AppContent() {
  const { isDemoModalOpen, closeDemoModal } = useModal()

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* NavBar */}
      <NavBar />

      {/* Main Content - Con padding-top para compensar el navbar fijo */}
      <main className="pt-20">
        {/* Overview Section - incluye video y features */}
        <Overview />

        {/* Process Section */}
        <Process />

        {/* Product Showcase Section */}
        <ProductShowcase />

        {/* Contact Section */}
        <Contact />

        {/* Partnership Section */}
        <Partnership />

        {/* Footer Section */}
        <Footer />
      </main>

      {/* WhatsApp Button - Fixed Position */}
      <WhatsAppButton />

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  )
}

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  )
}

export default App
