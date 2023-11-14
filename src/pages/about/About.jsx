import Info from '../../components/info/Info'
import Skills from '../../components/skills/Skills'

import './About.scss'

const About = () => {
	return (
		<main className='section container'>
			<section className='about'>
				<h2 className='title'>
					About <span>Me</span>
				</h2>
				<div className='about_container grid'>
					<div className='info'>
						<h3 className='subtitle'>Personal Info</h3>
						<ul className='info_list grid'>
							<Info />
						</ul>
					</div>
				</div>
			</section>
			<div className='separator'></div>
			<section className='skills'>
				<h3 className='subtitle'>My Skills</h3>
				<div className='skills_container grid'>
					<Skills />
				</div>
			</section>
			<div className='separator'></div>
		</main>
	)
}

export default About
