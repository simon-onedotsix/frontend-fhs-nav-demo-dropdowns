import { EventsBar } from "@/ui/site/eventsbar"
import { HeaderBRF } from "@/ui/site/header-brf"

import './layout.css'

export default function Layout({ children }) {
	return (
		<>
			<EventsBar site={`/sa/brf`} />
			
			<HeaderBRF site={`/sa/brf`} parentSite={`/sa`} handle={`At FHS Saudi Arabia`} parentHandle={`FHS Saudi Arabia`} />
			
			{children}
		</>
	)
}
