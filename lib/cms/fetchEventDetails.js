export default async function fetchEventDetails( siteHandle ) {
	
	const res = await fetch(process.env.API_URL, {
		method: 'POST',

		headers: {
			"Content-Type": "application/json",
            "Authorization": process.env.API_TOKEN
		},

		body: JSON.stringify({
			query: `
                {
                    entry(site: "${siteHandle}" section:"eventDetails") {
                        ...on event_Entry {
                            id
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

	// console.log('res:', res.body)

	return res.json()
}