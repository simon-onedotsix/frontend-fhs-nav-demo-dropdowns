import { EventsBar } from "@/ui/site/eventsbar"
import { HeaderBRF } from "@/ui/site/header-brf"

import './layout.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar site={`/egypt/brf`} />
			
			<HeaderBRF site={`/egypt/brf`} parentSite={`/egypt`} handle={`At FHS Egypt`} parentHandle={`FHS Egypt`} />
			
			{children}
		</>
	)
}
