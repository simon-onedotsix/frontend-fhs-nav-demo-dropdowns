import { EventsBar } from "@/ui/eventsbar"
import { HeaderBRF } from "@/ui/header-brf"

import './layout.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar />
			
			<HeaderBRF site={`/egypt/brf`} parentSite={`/egypt`} handle={`At FHS Egypt`} parentHandle={`FHS Egypt`} />
			
			{children}
		</>
	)
}
