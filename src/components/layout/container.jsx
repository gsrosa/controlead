import React from 'react'

export const Container = ({ children, className, ...props }) => (
	<div className={`container-fluid ${className}`} {...props}>
		{children}
	</div>
)
