import fetchNavigation from '@/lib/cms/fetchNavigation'


import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"

import './page.css'

import { FHS_AFRICA as header } from '@/fixtures/nav'

export default async function Layout({ children }) {

	// const header = await fetchNavigation("fhsAfrica")
	// console.log('header:', header)
	
	return (
		<>
			<EventsBar />
			
			<Header
				site={`/africa`}
				handle={`Africa`}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>
			
			{children}
		</>
	)
}
