import { Outlet } from 'react-router-dom'
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import './components/todo/todo.css'
import './styles/global.css'
const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default App
