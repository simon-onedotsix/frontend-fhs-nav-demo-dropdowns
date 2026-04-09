import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/site/eventsbar"
import { Header } from "@/ui/site/header"
import { Section } from "@/ui/layout/section"

import './page.css'

// static nav
import { FHS_SA as header } from '@/fixtures/nav'

export default async function Page() {

      // const header = await fetchNavigation("fhsSaudiArabia")
      // console.log('nav:', header)
      
	return (
            <>
                  <EventsBar site={`/sa`} />
                  
                  <Header
                        site={`/sa`}
                        handle={`Saudi Arabia`}
                        mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
                  />

                  <Section>
                        <p className="h5 fw-400">Home page</p>
                  </Section>
		</>
	)
}
