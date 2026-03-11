import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import './page.css'


// static nav
// import { FHS_WORLD as header } from '@/fixtures/nav'


export default async function Page() {

	const header = await fetchNavigation("fhsWorld")
	// console.log('nav:', header)

	return (
		<>
			<EventsBar />
			
			<Header
				site={`/world`}
				handle={`World`}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>
			
			<Section>
				<p className="h5 fw-400">Home page</p>
			</Section>
		</>
	)
}
