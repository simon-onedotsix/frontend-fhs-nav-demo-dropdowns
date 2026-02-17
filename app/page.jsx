import { EventsBar } from "@/ui/eventsbar"
import { GlobalHeader } from "@/ui/header-global"

export default function Home() {

	return (
		<>
			<EventsBar />

			<GlobalHeader />

			

			<div style={{ display: `flex`, justifyContent: `center`, paddingTop: `5rem` }}>
				<div style={{ display: `inline-flex`, flexDirection: `column`, gap: 20 }}>
					
					<a href="/world">
						<section style={{ padding: `2rem`, borderRadius: `1rem`, border: `1px solid var(--fg)`, textAlign: `center`}}>
							<p className="h4">FHS World</p>
						</section>
					</a>
					
					<a href="/sa">
						<section style={{ padding: `2rem`, borderRadius: `1rem`, border: `1px solid var(--fg)`, textAlign: `center`}}>
							<p className="h4">FHS Saudi Arabia</p>
						</section>
					</a>

					<a href="/africa">
						<section style={{ padding: `2rem`, borderRadius: `1rem`, border: `1px solid var(--fg)`, textAlign: `center`}}>
							<p className="h4">FHS Africa</p>
						</section>
					</a>

				</div>
			</div>


		</>
	)
}
