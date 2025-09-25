import NavBar from './components/NavBar'
import Overview from './components/Overview'

function App() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* NavBar */}
      <NavBar />

      {/* Overview Section - incluye video y features */}
      <Overview />
    </div>
  )
}

export default App
