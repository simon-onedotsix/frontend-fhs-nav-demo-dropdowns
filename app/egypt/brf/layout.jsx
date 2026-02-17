import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import './layout.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar />
			
			<Header site={`/egypt/brf`} handle={`Egypt BRF`} />
			
			{children}
		</>
	)
}
