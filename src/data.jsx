import { FaEnvelopeOpen, FaFolderOpen, FaHome, FaUser } from 'react-icons/fa'
// import {FiFileText, FiUser, FiExternalLink} from 'react-icons/fi';
import site1 from '/public/images/ujutdom.png';
import site2 from '/public/images/pochtadetstva.png';
import site3 from '/public/images/hack1.png';
import site4 from '/public/images/workout.png';

export const links = [
	{
		id: 1,
		name: 'Home',
		icon: <FaHome className='icon' />,
		path: '/'
	},
	{
		id: 2,
		name: 'About',
		icon: <FaUser className='icon' />,
		path: '/about'
	},
	{
		id: 3,
		name: 'Portfolio',
		icon: <FaFolderOpen className='icon' />,
		path: '/portfolio'
	},
	{
		id: 4,
		name: 'Contact',
		icon: <FaEnvelopeOpen className='icon' />,
		path: '/contact'
	}
]

export const infoAboutMe = [
	{
		id: 1,
		title: 'Name : ',
		description: 'Zhukov Ivan'
	},
	{
		id: 2,
		title: 'Age : ',
		description: '19 Years'
	},
	{
		id: 3,
		title: 'Country, City : ',
		description: 'Russia, Moscow'
	},
	{
		id: 4,
		title: 'Email : ',
		description: 'jukov0411200303@gmail.com'
	},
	{
		id: 5,
		title: 'Telegram : ',
		description: '@ivan_zhuk0v'
	},
	{
		id: 5,
		title: 'Languages : ',
		description: 'Russian, English'
	}
]

export const skills = [
	{
		id: 1,
		title: 'HTML',
		percentage: '60'
	},
	{
		id: 2,
		title: 'CSS',
		percentage: '75'
	},
	{
		id: 3,
		title: 'JavaScript',
		percentage: '80'
	},
	{
		id: 4,
		title: 'React',
		percentage: '50'
	},
	{
		id: 5,
		title: 'Jquery',
		percentage: '45'
	}
]
export const portfolio = [
	{
		id: 1,
		img: site1,
		title: 'Landing ',
		details:[
			{
				icon:'',
				title: 'Project: ',
				desc:'Website'
			},
			{
				title: 'Language: ',
				desc:'HTML, CSS(SCSS), JS, PHP'
			}
		]
	},
	{
		id: 2,
		img: site2,
		title: 'Landing ',
		details:[
			{
				icon:'',
				title: 'Project: ',
				desc:'Website'
			},
			{
				title: 'Language: ',
				desc:'React JS, SCSS'
			}
		]
	},
	{
		id: 3,
		img: site3,
		title: 'Hack1 ',
		details:[
			{
				icon:'',
				title: 'SmartOffice',
				desc:'Website'
			},
			{
				title: 'Language: ',
				desc:'React JS, Go, SCSS'
			}
		]
	},
	{
		id: 4,
		img: site4,
		title: 'WorkoutApp ',
		details:[
			{
				icon:'',
				title: 'Project: ',
				desc:'Website'
			},
			{
				title: 'Language: ',
				desc:'React JS, Node JS, SCSS'
			}
		]
	},
	
]
