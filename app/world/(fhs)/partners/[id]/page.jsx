import fetchPartner from '@/lib/swapcard/fetchPartner'

export default async function Page({ params }) {

    const { id } = await params
    const { data } = await fetchPartner( process.env.SWAPCARD_EVENT_ID_WORLD_2025, id )
    const partner = data.exhibitors[0]
    // console.log('data:', data.exhibitors[0])


    if ( partner ) return (
        <section className='block'>
            <p>&larr;<a href='/world/partners'>All partners</a></p>
            <br/>
            <p>Partner profile page</p>
            <p>{ partner.name }</p>
            <p>{ partner.logoUrl }</p>
            <p>{ partner.website }</p>
            <br/>
            <p>{ partner.htmlDescription }</p>
        </section>
    )

    return (
        <p>Error! No partner data found.</p>
    )
}


