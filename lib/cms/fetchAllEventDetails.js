export default async function fetchAllEventDetails() {
	
	const res = await fetch(process.env.API_URL, {
		method: 'POST',

		headers: {
			"Content-Type": "application/json",
            "Authorization": process.env.API_TOKEN
		},

		body: JSON.stringify({
			query: `
                {
					entries(
						section: "eventDetails"
						site: ["fhsWorld", "fhsSaudiArabia", "fhsAfrica"]
					) {
						... on event_Entry {
							id
							slug
							title
							venue
							startDate
							endDate
							seoImage {
								url
							}
							metaTitle
							metaDescription
						}
					}
				}
            `
		})
	})

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	// console.log('res:', res)


	return res.json()
}