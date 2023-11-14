import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ReactIcon from '../../../public/images/React-icon.png'
import './Home.scss'

const Home = () => {
	return (
		<section className='home section grid'>
			<img src={ReactIcon} alt='profile' />

			<div className='content'>
				<div className='data'>
					<h1 className='title'>
						I'm <span>Zhukov Ivan</span> Web Developer
					</h1>
					<p className='description'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
						perferendis tenetur rerum corporis, recusandae aut provident
						repellendus in ab voluptate ea temporibus ipsa incidunt ducimus
						distinctio vitae quisquam aspernatur mollitia deserunt tempore
						laudantium assumenda debitis! Provident doloribus fugiat debitis?
						Tempora eum sapiente quasi obcaecati illum perspiciatis sit
						exercitationem incidunt! Beatae!
					</p>
					<Link to='/about' className='button'>
						<div>More About Me </div>
						<span className='icon'>
							<FaArrowRight />
						</span>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Home
