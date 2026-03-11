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
                    mainMenu: entries(site: "${siteHandle}" section:"mainMenu" level: 1) {

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
                                    target
                                }
                                ... on subsection_Entry {
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
                                            target
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
                                    target
                                }
                                ... on subsection_Entry {
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
                                            target
                                        }
                                    }
                                }
                            }
                        }

                    }

                    event: entry(site: "${siteHandle}", section: "eventDetails") {
                        ... on event_Entry {
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
                            headerCtas {
                                label
                                hyperlink
                                openInNewWindow
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