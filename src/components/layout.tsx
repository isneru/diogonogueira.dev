import { Component } from 'solid-js'
import { Navbar } from './navbar'
import { RouteSectionProps } from '@solidjs/router'

export const Layout: Component<RouteSectionProps<unknown>> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}
