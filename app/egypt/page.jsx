import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/site/eventsbar"
import { Header } from "@/ui/site/header"
import { Section } from "@/ui/layout/section"

import './page.css'

import { FHS_EGYPT as header } from '@/fixtures/nav'

export default async function Page() {

	// const header = await fetchNavigation("fhsEgypt")
	// console.log('header:', header)
	
	return (
		<>
			<EventsBar site={`/egypt`} />
			
			<Header
				site={`/egypt`}
				handle={`Egypt`}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>
			
			<Section>
				<p className="h5 fw-400">Home page</p>
			</Section>
		</>
	)
}
