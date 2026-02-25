import { EventsBar } from "@/ui/eventsbar"
import { HeaderBRF } from "@/ui/header-brf"

import './layout.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar />
			
			<HeaderBRF site={`/sa/brf`} parentSite={`/sa`} handle={`At FHS Saudi Arabia`} parentHandle={`FHS Saudi Arabia`} />
			
			{children}
		</>
	)
}
