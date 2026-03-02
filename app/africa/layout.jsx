import fetchNavigation from '@/lib/cms/fetchNavigation'


import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"

import './page.css'

import { FHS_AFRICA as nav } from '@/fixtures/nav'

export default async function Layout({ children }) {

	// const nav = await fetchNavigation("fhsAfrica")
	// console.log('nav:', nav)
	
	return (
		<>
			<EventsBar />
			
			<Header site={`/africa`} handle={`Africa`} mainMenu={nav.data.entries} />
			
			{children}
		</>
	)
}
