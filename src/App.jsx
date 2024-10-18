import './App.scss'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetail />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
