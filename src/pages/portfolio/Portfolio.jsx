import { useState } from 'react'
import { portfolio } from '../../data'
import './Portfolio.scss'
const Portfolio = () => {
	const [isActive, setIsActive] = useState(false)
	return (
		<main className='section container'>
			<section className='portfolio'>
				<h2 className='title'>
					<span>My</span> Portfolio
				</h2>
				<div className='projects'>
					{portfolio.map(value => {
						return (
							<>
								<div key={value.id}>
									<div
										onClick={() => setIsActive(true)}
										style={{ backgroundImage: `url(${value.img})` }}
									>
										<div className='blur'></div>
										<h3>{value.title}</h3>
									</div>
								</div>
							</>
						)
					})}
				</div>
			</section>
		</main>
	)
}

export default Portfolio
