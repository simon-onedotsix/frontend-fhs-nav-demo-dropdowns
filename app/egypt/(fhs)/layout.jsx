import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/site/eventsbar"
import { Header } from "@/ui/site/header"
import { Section } from "@/ui/layout/section"

import './page.css'

import { FHS_EGYPT as header } from '@/fixtures/nav'

export default async function Layout({ children }) {

	// const header = await fetchNavigation("fhsEgypt")

	return (
		<>
			<EventsBar site={`/egypt`} />
			
			<Header
				site={`/egypt`}
				handle={`Egypt`}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>
			
			{children}
		</>
	)
}
