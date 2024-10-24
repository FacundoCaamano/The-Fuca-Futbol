import { Link,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { AppRouter } from './routes/AppRouter'
import { PlayersProvider } from './context/PlayersContext'
import football from './assets/football.png'
import { NavBar } from './components/navBar/NavBarComponent'
function App() {
  return (
    <PlayersProvider>
    <Router>
      <div className='app-container'>
        <Link to='/home'>
        <div className='titleContainer'>
          <img src={football} alt="icon" />
          <h1 className='title'>The Fuca Futbol</h1>
        </div>
        </Link>
        <div className='navBarPagesContainer'>
          <NavBar/>
          <div className='pages'>
            <AppRouter/>
          </div>
        </div>
      </div>
    </Router>
    </PlayersProvider>
  )
}

export default App
