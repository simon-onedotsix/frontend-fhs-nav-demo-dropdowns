import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import './page.css'

import { FHS_EGYPT as nav } from '@/fixtures/nav'

export default async function Page() {

	// const nav = await fetchNavigation("fhsEgypt")
	// console.log('nav:', nav)
	
	return (
		<>
			<EventsBar />
			
			<Header site={`/egypt`} handle={`Egypt`} mainMenu={nav.data.entries} />
			
			<Section>
				<p className="h5 fw-400">Home page</p>
			</Section>
		</>
	)
}
