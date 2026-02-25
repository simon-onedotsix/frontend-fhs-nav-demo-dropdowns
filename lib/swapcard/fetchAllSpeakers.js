// note: the groupId argument isolates only the speaker profiles from all other profiles
// location in swapcard: event builder -> groups & permissions -> groups -> speakers (pops up)

export default async function fetchAllSpeakers( eventId, groupId ) {
	
	const res = await fetch('https://developer.swapcard.com/event-admin/graphql', {
		method: 'POST',

		headers: {
			"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
		},

		body: JSON.stringify({
			query: `
					query eventPerson($eventId: ID!, $cursor: CursorPaginationInput, $filters: [EventPersonFilter!] ) {
						eventPerson(eventId: $eventId, cursor: $cursor, filters:$filters ) {
						nodes {
							id
							type
							firstName
							lastName
							jobTitle
							organization
							photoUrl
							groups {
								id
								name
							}
							withEvent(eventId: $eventId) {
							fields {
								... on SelectField {
									translations {
										value
										language
									}
									definition {
										id
										translations {
											name
											language
										}
											}
										}
									}
									badges {
										... on BadgeBarcode {
											__typename
											barcode
											createdAt
										}
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": eventId,
					"cursor": {
						"first": 300
					},
					"filters": {
						"shouldBeInGroups": groupId
					}
				}
		})
	})

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	// console.log('res:', res)

	return res.json()
}