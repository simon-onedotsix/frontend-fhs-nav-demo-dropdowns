import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/site/eventsbar"
import { Header } from "@/ui/site/header"
import { Section } from "@/ui/layout/section"


// static nav
import { FHS as nav } from '@/fixtures/nav'


export default async function Page() {

      // dunamic nav (disabled for dev demo)
	// const nav = await fetchNavigation("fhs")
	// console.log('nav:', nav)
      
	return (
            <>
                  <EventsBar />
                  <Header site={`/`} mainMenu={nav.data.entries} />

                  <Section>
                  <p className="h5 fw-400">Content page</p>
                  </Section>
		</>
	)
}
