import { type LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Outlet, Scripts } from '@remix-run/react'
import { KCDShop } from './kcdshop.tsx'

import fontStyles from './styles/font.css'
import tailwindStyles from './styles/tailwind.css'

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: fontStyles,
		},
		{
			rel: 'stylesheet',
			href: tailwindStyles,
		},
	]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Links />
			</head>
			<body>
				<Outlet />
				<Scripts />
				<KCDShop />
				<LiveReload />
			</body>
		</html>
	)
}
