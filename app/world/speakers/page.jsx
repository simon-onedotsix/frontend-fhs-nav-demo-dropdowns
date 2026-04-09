import fetchAllSpeakers from '@/lib/swapcard/fetchAllSpeakers'

import { SpeakerGrid } from '@/ui/layout/speakers/speakerGrid'
import { SpeakerCard } from '@/ui/layout/speakers/speakerCard'

export default async function Page({ params }) {

	console.log( await params )

	const swapcardSpeakerGroupId = "RXZlbnRHcm91cF81ODU5ODM="
	const { data } = await fetchAllSpeakers( process.env.SWAPCARD_EVENT_ID_WORLD_2025, swapcardSpeakerGroupId )
	// console.log('data.eventPerson.nodes:', data.eventPerson.nodes)

	return (
		<section className="block">

			<div className="container">
				<h1 className='fs-2'>Speakers</h1>
			</div>

			<div className="container">
				<SpeakerGrid>
					{ data.eventPerson.nodes.map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} sitePathSegment={'/world'} />) }
				</SpeakerGrid>
			</div>

		</section>
	)
}


