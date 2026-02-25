export default async function fetchAllPartners( eventId ) {
	
	const res = await fetch('https://developer.swapcard.com/event-admin/graphql', {
		method: 'POST',

		headers: {
			"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
		},

		body: JSON.stringify({
			query: `
					query {
						event(id: "${eventId}") {
							fieldDefinitions {
								... on SelectFieldDefinition {
									id
									name
									optionsValues {
										id
										value
										translations {
											language
											value
										}
									}
								}
							}
						}
						exhibitors(eventId: "${eventId}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							fields {
								... on SelectField {
									id
									value
									definition {
										id
										name
									}
									translations {
										value
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": eventId,
					"page": 1
				}
		})
	})

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	// console.log('res:', res)

	return res.json()
}