import { Link,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { AppRouter } from './routes/AppRouter'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Link to='/home'>
          <h1>The Fuca Futbol</h1>
        </Link>
        <AppRouter/>
      </div>
    </Router>
  )
}

export default App
