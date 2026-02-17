import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import './layout.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar />
			
			<Header site={`/sa/brf`} handle={`Saudi Arabia BRF`} />
			
			{children}
		</>
	)
}
