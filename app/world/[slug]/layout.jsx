import fetchNavigation from '@/lib/cms/fetchNavigation'


import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import '../page.css'

export default async function Layout({ children }) {

	const nav = await fetchNavigation("fhsWorld")
	
	return (
		<>
			<EventsBar />
			
			<Header site={`/world`} handle={`World`} mainMenu={nav.data.entries} />
			
			{children}
		</>
	)
}
