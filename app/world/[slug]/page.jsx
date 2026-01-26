import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

export default function Page() {
	return (
            <>
                  <EventsBar />
                  <Header site={`world`} handle={`FHS World`} />

                  <Section>

                        <br />
                        <br />
                        <p className="h5 fw-400">Content page</p>
                  </Section>
		</>
	)
}
