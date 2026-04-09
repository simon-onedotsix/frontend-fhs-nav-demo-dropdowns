import fetchNavigation from '@/lib/cms/fetchNavigation'


import { EventsBar } from "@/ui/site/eventsbar"
import { Header } from "@/ui/site/header"
import { Section } from "@/ui/layout/section"

import '../page.css'


// static nav
import { FHS_WORLD as header } from '@/fixtures/nav'



export default async function Layout({ children }) {

	// const header = await fetchNavigation("fhsWorld")
	// console.log('nav:', header)
	
	return (
		<>
			<EventsBar site={`/world`} />
			
			<Header
				site={`/world`}
				handle={`World`}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>
			
			{children}
		</>
	)
}
