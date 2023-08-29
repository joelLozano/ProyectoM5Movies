import './App.css'
import Movies from './movies/movies.jsx'
import Nav from './nav/Nav.jsx'
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
    <Nav/>
    <Outlet />
    <Movies/>
    </>
    
  )
}

export default App
