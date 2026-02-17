import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

export default function Page() {
	return (
            <>
                  <EventsBar/>
                  <Header site={`africa`} handle={`Africa`} />

                  <Section>
                        <p className="h5 fw-400">Content page</p>   
                  </Section>
		</>
	)
}
