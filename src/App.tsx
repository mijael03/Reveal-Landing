import NavBar from './components/NavBar'
import Overview from './components/Overview'
import Process from './components/Process'

function App() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* NavBar */}
      <NavBar />

      {/* Overview Section - incluye video y features */}
      <Overview />

      {/* Process Section */}
      <Process />
    </div>
  )
}

export default App
