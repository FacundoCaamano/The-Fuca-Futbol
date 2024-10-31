import { Link,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { AppRouter } from './routes/AppRouter'

import football from './assets/football.png'
import { NavBar } from './components/navBar/NavBarComponent'
import { useTheme } from './context/ThemeContext'


function App() {
  const { isDarkMode } = useTheme();
  return (
    
    <Router>
      <div className={isDarkMode ? 'appContainer-darkmode' : 'appContainer'} >
        <Link to='/home'>
        <div className={isDarkMode ? 'titleContainer darkMode' : 'titleContainer'}>
          <img src={football} alt="icon" />
          <h1 className={isDarkMode ? 'titleDark' : 'title'}>The Fuca Futbol</h1>
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
  )
}

export default App
