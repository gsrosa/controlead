import React, { useEffect, useState } from 'react'

export const Container = ({ children, className, ...props }) => {
	const [height, setHeight] = useState(0)

	useEffect(() => {
		setHeight(window.innerHeight)
		window.addEventListener('resize', () => {
			setHeight(window.innerHeight)
		})
	}, [])

	return (
		<div
			className={`container-fluid ${className}`}
			{...props}
			style={{ minHeight: `${height}px` }}
		>
			{children}
		</div>
	)
}
