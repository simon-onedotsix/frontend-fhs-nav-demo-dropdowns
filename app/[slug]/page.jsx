import { EventsBar } from "@/ui/eventsbar"
import { GlobalHeader } from "@/ui/header-global"
import { Section } from "@/ui/section"

export default function Page() {
	return (
            <>
                  <EventsBar />
                  <GlobalHeader />

                  <Section>
                  <p className="h5 fw-400">Content page</p>
                  </Section>
		</>
	)
}
