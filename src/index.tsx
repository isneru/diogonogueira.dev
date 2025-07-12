/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route, Navigate } from '@solidjs/router'
import { Home } from './routes/home'
import { Curriculum } from './routes/curriculum'

import './assets/globals.css'
import { Layout } from './components/layout'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Ensure there is an element with id "root" in your HTML.'
	)
}

render(
	() => (
		<Router root={Layout}>
			<Route
				path='/curriculum/'
				component={() => <Navigate href='/curriculum/en' />}
			/>
			<Route path='/curriculum/en' component={() => <Curriculum lang='en' />} />
			<Route path='/curriculum/pt' component={() => <Curriculum lang='pt' />} />
			<Route path='/' component={Home} />
			<Route path='*' component={() => <Navigate href='/' />} />
		</Router>
	),
	root!
)
