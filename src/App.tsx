import { Link,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { AppRouter } from './routes/AppRouter'
import { PlayersProvider } from './context/PlayersContext'

function App() {
  return (
    <PlayersProvider>
    <Router>
      <div className='app-container'>
        <Link to='/home'>
          <h1>The Fuca Futbol</h1>
        </Link>
        <AppRouter/>
      </div>
    </Router>
    </PlayersProvider>
  )
}

export default App
