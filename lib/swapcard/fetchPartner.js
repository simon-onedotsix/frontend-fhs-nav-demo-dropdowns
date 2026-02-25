export default async function fetchPartner( eventId, exhibitorId ) {

    // sanitise the swapcard id (unescape the equals symbol at the end)
    exhibitorId = exhibitorId.replace("%3D", "=")
	
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
                query exhibitors($eventId: String!, $ids: [String!]) {
                    exhibitors(eventId: $eventId, ids: $ids, page:1, pageSize:100) {
                        id
                        name
                        logoUrl
                        websiteUrl
                        htmlDescription
                    }
                }
            `,
            variables: {
                "eventId": eventId,
                "ids": [
                    exhibitorId
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