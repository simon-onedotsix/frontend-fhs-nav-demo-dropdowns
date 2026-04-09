import fetchAllPartners from '@/lib/swapcard/fetchAllPartners'

export default async function Page() {

	const { data } = await fetchAllPartners( process.env.SWAPCARD_EVENT_ID_WORLD_2025 )
	// console.log('data:', data)
	// console.log('data.exhibitors:', data.exhibitors)

	return (
		<section className="block">

			<div className="container">
				<h1 className='fs-2'>Partners</h1>
			</div>

			<div className="container">
				{ data.exhibitors.map( partner => <p key={partner.id}><a href={`/world/partners/${partner.id}`}>{ partner.name }</a></p>) }
			</div>
		</section>
	)
}


