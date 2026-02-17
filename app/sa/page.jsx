import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import './page.css'

export default function Page() {
	return (
            <>
                  <EventsBar />
                  
                  <Header site={`sa`} handle={`Saudi Arabia`} />

                  <Section>
                        <p className="h5 fw-400">Home page</p>
                  </Section>
		</>
	)
}
