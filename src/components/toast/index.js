import { toast } from 'react-toastify'

export const notify = ({ text, position = toast.POSITION.TOP_RIGHT }) => ({
	success: () => toast.success(text, { position }),
	error: () => toast.error(text, { position }),
	warn: () => toast.warn(text, { position }),
	info: () => toast.info(text, { position }),
})
