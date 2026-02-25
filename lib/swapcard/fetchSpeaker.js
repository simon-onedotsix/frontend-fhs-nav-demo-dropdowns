export default async function fetchAllSpeakers( eventId, eventPeopleId ) {

    console.log(eventPeopleId)
    // sanitise the swapcard id (unescape the equals symbol at the end)
    eventPeopleId = eventPeopleId.replace("%3D", "=")
	
    // fetch the data
	const res = await fetch('https://developer.swapcard.com/event-admin/graphql', {
        cache: 'force-cache',

		method: 'POST',

		headers: {
			"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
		},

		body: JSON.stringify({
			query: `
                query EventPerson($eventId: ID!, $filters: [EventPersonFilter!]) {
                    eventPerson(eventId: $eventId, filters: $filters) {
                        nodes {
                            id
                            photoUrl
                            firstName
                            lastName
                            jobTitle
                            organization
                            biography
                            withEvent(eventId: $eventId) {
                                speakerOnPlannings {
                                    id
                                    title
                                    beginsAt
                                    endsAt
                                }
                            }
                        }
                    }
                }
            `,
            variables: {
                "eventId": eventId,
                "filters": [
                    {
                        "eventPeopleIds": eventPeopleId
                    }
                ]
            }
		})
	})

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	// console.log('res:', res)

	return res.json()
}