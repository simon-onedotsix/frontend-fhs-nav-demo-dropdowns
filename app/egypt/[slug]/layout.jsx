import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import '../page.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar />
			
			<Header site={`/egypt`} handle={`Egypt`} />
			
			{children}
		</>
	)
}
