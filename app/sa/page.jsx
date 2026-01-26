import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

export default function Page() {
	return (
            <>
                  <EventsBar />
                  
                  <Header site={`sa`} handle={`FHS Saudi Arabia`} />

                  <Section>
                        <br />
                        <br />
                        <p className="h5 fw-400">Home page</p>
                  </Section>
		</>
	)
}
