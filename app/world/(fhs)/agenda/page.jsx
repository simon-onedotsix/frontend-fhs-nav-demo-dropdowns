import fetchAgenda from '@/lib/swapcard/fetchAgenda'

import { Agenda } from '@/ui/layout/agenda/agenda'



export default async function Page() {

	const { data } = await fetchAgenda( process.env.SWAPCARD_EVENT_ID_WORLD_2025 )
	const sessions = data.plannings
	// console.log('data:', data)

	if (sessions) return (
		
		<>
			<section className='block'>

				<div className="container">
					<h1 className='fs-2'>Agenda</h1>
				</div>

				<div className="container">
					<Agenda sessions={ sessions } />
				</div>
				
			</section>
		</>
	)

	return (
		<p>Error! No agenda data found.</p>
	)
}