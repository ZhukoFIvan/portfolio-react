import { infoAboutMe } from '../../data'
import './Info.scss'

const Info = () => {
	return (
		<>
			{infoAboutMe.map(({ id, title, description }) => {
				return (
					<li className='item' key={id}>
						<span className='title_info'>{title}</span>
						<span className='description_info'>{description}</span>
					</li>
				)
			})}
		</>
	)
}

export default Info
