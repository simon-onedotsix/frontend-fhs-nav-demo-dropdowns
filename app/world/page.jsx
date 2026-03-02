import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import './page.css'


// static nav
import { FHS_WORLD as nav } from '@/fixtures/nav'


export default async function Page() {

	// const nav = await fetchNavigation("fhsWorld")
	// console.log('nav:', nav)

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
