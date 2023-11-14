import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/portfolio'>Portfolio</Link>
			<Link to='/contacts'>Contacts</Link>
		</>
	)
}

export default Navbar
