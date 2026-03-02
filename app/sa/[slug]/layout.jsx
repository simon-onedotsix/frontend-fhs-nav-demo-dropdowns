import fetchNavigation from '@/lib/cms/fetchNavigation'


import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"

import '../page.css'

// static nav
import { FHS_SA as nav } from '@/fixtures/nav'

export default async function Layout({ children }) {

	// const nav = await fetchNavigation("fhsSaudiArabia")
	// console.log('nav:', nav)
	
	return (
		<>
			<EventsBar />
			
			<Header site={`/sa`} handle={`Saudi Arabia`} mainMenu={nav.data.entries} />
			
			{children}
		</>
	)
}
