export default async function fetchNavigation( siteHandle ) {
	
	const res = await fetch(process.env.API_URL, {
		method: 'POST',

		headers: {
			"Content-Type": "application/json",
            "Authorization": process.env.API_TOKEN
		},

		body: JSON.stringify({
			query: `
                {
                    entries(site: "${siteHandle}" section:"mainMenu" level: 1) {

                        ... on section_Entry {
                            __typename
                            id
                            title
                            children {
                                ... on section_Entry {
                                    __typename
                                    id
                                    title
                                }
                                ... on navigation_Entry {
                                    __typename
                                    id
                                    title
                                    navUrl
                                }
                                ... on heading_Entry {
                                    __typename
                                    id
                                    title
                                    children {
                                        ... on section_Entry {
                                            __typename
                                            id
                                            title
                                        }
                                        ... on navigation_Entry {
                                            __typename
                                            id
                                            title
                                            navUrl
                                        }
                                    }
                                }
                            }
                        }

                        ... on navigation_Entry {
                            __typename
                            id
                            title
                            navUrl
                            children {
                                ... on section_Entry {
                                    __typename
                                    id
                                    title
                                }
                                ... on navigation_Entry {
                                    __typename
                                    id
                                    title
                                    navUrl
                                }
                                ... on heading_Entry {
                                    __typename
                                    id
                                    title
                                    children {
                                        ... on section_Entry {
                                            __typename
                                            id
                                            title
                                        }
                                        ... on navigation_Entry {
                                            __typename
                                            id
                                            title
                                            navUrl
                                        }
                                    }
                                }
                            }
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