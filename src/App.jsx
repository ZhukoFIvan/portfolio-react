import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import './index.scss'

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='portfolio' element={<Portfolio />} />
				<Route path='contacts' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
