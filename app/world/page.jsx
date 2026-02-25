import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import './page.css'

export default async function Page() {

	const nav = await fetchNavigation( "fhsWorld" )

	return (
		<>
			<EventsBar />
			
			<Header site={`/world`} handle={`World`} mainMenu={nav.data.entries} />
			
			<Section>
				<p className="h5 fw-400">Home page</p>
			</Section>
		</>
	)
}
