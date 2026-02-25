import { EventsBar } from "@/ui/eventsbar"
import { HeaderBRF } from "@/ui/header-brf"

import './layout.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar />
			
			<HeaderBRF site={`/world/brf`} parentSite={`/world`} handle={`At FHS World`} parentHandle={`FHS World`} />
			
			{children}
		</>
	)
}
