import React from 'react'
import { Container } from '../layout/container'

export default ({ ...props }) => (
	<Container>
		<props.routes />
	</Container>
)
