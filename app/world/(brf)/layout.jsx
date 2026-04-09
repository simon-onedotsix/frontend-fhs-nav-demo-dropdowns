import { EventsBar } from "@/ui/site/eventsbar"
import { HeaderBRF } from "@/ui/site/header-brf"

import './layout.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar site={`/world/brf`} />
			
			<HeaderBRF site={`/world/brf`} parentSite={`/world`} handle={`At FHS World`} parentHandle={`FHS World`} />
			
			{children}
		</>
	)
}
