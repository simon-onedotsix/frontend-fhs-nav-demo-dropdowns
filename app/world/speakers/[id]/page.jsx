import fetchSpeaker from '@/lib/swapcard/fetchSpeaker'

export default async function Page({ params }) {

    const { id } = await params
    const { data } = await fetchSpeaker( process.env.SWAPCARD_EVENT_ID_WORLD_2025, id )
    const profile = data.eventPerson.nodes[0]
    // console.log('data:', data.eventPerson.nodes[0])

    if ( profile ) return (
        <section className='block'>
            <p>&larr;<a href='/world/speakers'>All speakers</a></p>
            <br/>
            <p>Speaker profile page</p>
            <p>{ profile.firstName } { profile.lastName }</p>
            <p>{ profile.jobTitle }</p>
            <p>{ profile.organization }</p>
            <br/>
            <p>{ profile.biography }</p>

            <br/>
            {
                profile.withEvent.speakerOnPlannings.length
                ? <p>This speaker has something to say on stage</p>
                : null
            }
        </section>
    )

    return (
        <p>Error! Profile not found.</p>
    )
}


