import './Modal.scss'
import { portfolio } from '../../data'
const Modal = ({ isActive, setIsActive}) => {
	return (
		<div
			className={isActive ? 'modal active' : 'modal'}
			onClick={() => setIsActive(false)}
		>
			<div className='modal_content' onClick={e => e.stopPropagation()}>
				
			</div>
		</div>
	)
}

export default Modal
