import React from 'react'
import Modal from 'react-modal'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		minWidth: '30%',
	},
}

Modal.setAppElement('#root')

const ModalComponent = ({
	children,
	isOpen,
	afterOpen = () => {},
	requestClose = () => {},
	label = '',
}) => (
	<Modal
		style={customStyles}
		isOpen={isOpen}
		onAfterOpen={afterOpen}
		onRequestClose={requestClose}
		contentLabel={label}
	>
		{children}
	</Modal>
)

export default ModalComponent
